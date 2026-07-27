import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

import AOS from 'aos'
import Typed from 'typed.js'
import PureCounter from '@srexi/purecounterjs'
import GLightbox from 'glightbox'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

export function usePortfolioEffects({
  typedElement,
  skillsElement,
  isotopeContainer,
  typedItems,
}) {
  const activePortfolioFilter = ref('*')

  let typedInstance = null
  let lightboxInstance = null
  let isotopeInstance = null
  let skillsObserver = null
  let imagesLoadedInstance = null
  let isUnmounted = false

  function initAos() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }

  function initTyped() {
    if (!typedElement.value) {
      return
    }

    typedInstance = new Typed(
      typedElement.value,
      {
        strings: typedItems,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      },
    )
  }

  function initPureCounter() {
    new PureCounter()
  }

  function initSkillsAnimation() {
    const skillsContainer =
      skillsElement.value

    if (!skillsContainer) {
      return
    }

    skillsObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry?.isIntersecting) {
          return
        }

        const progressBars =
          skillsContainer.querySelectorAll(
            '.progress-bar',
          )

        progressBars.forEach((progressBar) => {
          const progressValue =
            progressBar.getAttribute(
              'aria-valuenow',
            )

          progressBar.style.width =
            `${progressValue ?? 0}%`
        })

        observer.disconnect()
      },
      {
        threshold: 0.2,
      },
    )

    skillsObserver.observe(skillsContainer)
  }

  function initLightbox() {
    lightboxInstance = GLightbox({
      selector: '.glightbox',
    })
  }

  function initIsotope() {
    const container =
      isotopeContainer.value

    if (!container) {
      return
    }

    function handleImagesLoaded() {
      if (
        isUnmounted ||
        !container.isConnected
      ) {
        return
      }

      isotopeInstance = new Isotope(
        container,
        {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          filter: activePortfolioFilter.value,
          sortBy: 'original-order',
        },
      )
    }

    imagesLoadedInstance =
      imagesLoaded(container)

    imagesLoadedInstance.on(
      'always',
      handleImagesLoaded,
    )
  }

  function filterPortfolio(filter) {
    activePortfolioFilter.value = filter

    isotopeInstance?.arrange({
      filter,
    })

    AOS.refreshHard()
  }

  onMounted(async () => {
    await nextTick()

    initAos()
    initTyped()
    initPureCounter()
    initSkillsAnimation()
    initLightbox()
    initIsotope()
  })

  onBeforeUnmount(() => {
    isUnmounted = true

    typedInstance?.destroy()

    lightboxInstance?.destroy()

    isotopeInstance?.destroy()

    skillsObserver?.disconnect()

    imagesLoadedInstance?.off(
      'always',
    )
  })

  return {
    activePortfolioFilter,
    filterPortfolio,
  }
}