import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

const NAV_SECTION_IDS = [
  'hero',
  'about',
  'resume',
  'portfolio',
  'services',
  'contact',
]

export function usePortfolioNavigation() {
  const isHeaderOpen = ref(false)
  const isScrollTopVisible = ref(false)
  const isPreloading = ref(true)
  const activeSection = ref('hero')

  function toggleHeader() {
    isHeaderOpen.value = !isHeaderOpen.value
  }

  function closeHeader() {
    isHeaderOpen.value = false
  }

  function updateScrollState() {
    isScrollTopVisible.value = window.scrollY > 100

    const currentPosition = window.scrollY + 200

    for (const sectionId of NAV_SECTION_IDS) {
      const section = document.getElementById(sectionId)

      if (!section) {
        continue
      }

      const sectionStart = section.offsetTop
      const sectionEnd =
        section.offsetTop + section.offsetHeight

      const isCurrentSection =
        currentPosition >= sectionStart &&
        currentPosition <= sectionEnd

      if (isCurrentSection) {
        activeSection.value = sectionId

        break
      }
    }
  }

  function scrollToSection(
    sectionId,
    updateHash = true,
  ) {
    const section =
      document.getElementById(sectionId)

    if (!section) {
      return
    }

    const scrollMarginTop = Number.parseInt(
      window.getComputedStyle(section).scrollMarginTop,
      10,
    ) || 0

    window.scrollTo({
      top: section.offsetTop - scrollMarginTop,
      behavior: 'smooth',
    })

    if (
      updateHash &&
      window.location.hash !== `#${sectionId}`
    ) {
      window.history.pushState(
        null,
        '',
        `#${sectionId}`,
      )
    }

    closeHeader()
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function finishPreloading() {
    isPreloading.value = false
  }

  function handleHashChange() {
    const sectionId =
      window.location.hash.replace('#', '')

    if (!sectionId) {
      return
    }

    scrollToSection(sectionId, false)
  }

  onMounted(() => {
    updateScrollState()

    window.addEventListener(
      'scroll',
      updateScrollState,
      { passive: true },
    )

    window.addEventListener(
      'hashchange',
      handleHashChange,
    )

    if (document.readyState === 'complete') {
      finishPreloading()
    } else {
      window.addEventListener(
        'load',
        finishPreloading,
        { once: true },
      )
    }

    if (window.location.hash) {
      window.setTimeout(
        handleHashChange,
        100,
      )
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener(
      'scroll',
      updateScrollState,
    )

    window.removeEventListener(
      'hashchange',
      handleHashChange,
    )

    window.removeEventListener(
      'load',
      finishPreloading,
    )
  })

  return {
    isHeaderOpen,
    isScrollTopVisible,
    isPreloading,
    activeSection,
    toggleHeader,
    closeHeader,
    scrollToSection,
    scrollToTop,
  }
}