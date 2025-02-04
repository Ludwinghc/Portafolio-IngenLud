<script setup>
// importación de los componentes Generales
import Header from './components/headerComponent.vue'
// import Footer from './components/footerComponent.vue'
</script>
<!-- Pagina principal -->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>
