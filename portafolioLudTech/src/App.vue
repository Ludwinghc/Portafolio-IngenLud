<script setup>
import { RouterLink, RouterView } from 'vue-router'

// importación de la vista de home
// import HomeView from './views/HomeView.vue'
import Header from './components/headerComponent.vue'
</script>

<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
