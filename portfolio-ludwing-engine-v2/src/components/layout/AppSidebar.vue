<script setup>
defineProps({
  activeSection: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'navigate',
  'toggle-header',
])

const navigationItems = [
  { id: 'hero', label: 'Home', icon: 'bi-house' },
  { id: 'about', label: 'About Me', icon: 'bi-person' },
  { id: 'resume', label: 'Resume', icon: 'bi-file-earmark-text' },
  { id: 'portfolio', label: 'Portfolio', icon: 'bi-images' },
  { id: 'services', label: 'Services', icon: 'bi-hdd-stack' },
  { id: 'contact', label: 'Contact', icon: 'bi-envelope' },
]
</script>

<template>
  <header
    id="header"
    class="header dark-background d-flex flex-column"
    :class="{ 'header-show': isOpen }"
  >
    <i
      class="header-toggle d-xl-none bi"
      :class="isOpen ? 'bi-x' : 'bi-list'"
      aria-label="Toggle navigation"
      role="button"
      @click="emit('toggle-header')"
    ></i>

    <div class="profile-img">
      <img
        src="../../assets/images/lud.jpg"
        alt="Ludwing Hernandez"
        class="img-fluid rounded-circle"
      >
    </div>

    <a
      href="#hero"
      class="logo d-flex align-items-center justify-content-center"
      @click.prevent="emit('navigate', 'hero')"
    >
      <h1 class="sitename">Ludwing Hernandez</h1>
    </a>

    <div class="social-links text-center">
      <a href="https://github.com/Ludwinghc" aria-label="GitHub"><i class="bi bi-github"></i></a>
      <a href="https://www.tiktok.com/@ingenlud.20?_r=1&amp;_t=ZS-98N2y4PqteP" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
      <a href="https://www.instagram.com/ludwing.devops?igsh=MW4xMXRzZHB1cW1ucA%3D%3D&amp;utm_source=qr" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
      <a href="https://www.linkedin.com/in/ludwing-hernandez-caro/" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li v-for="item in navigationItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeSection === item.id }"
            @click.prevent="emit('navigate', item.id)"
          >
            <i class="bi navicon" :class="item.icon"></i>
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
