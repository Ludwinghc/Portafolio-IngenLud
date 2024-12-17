<script setup>
import { RouterLink, RouterView } from 'vue-router'

// importación de la vista de home
// import HomeView from './views/HomeView.vue'
import headerProof from './components/headerProof.vue'
</script>

<template>
  <div id="app">
    <headerProof />
    <router-view></router-view>
  </div>
</template>
