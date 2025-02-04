<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/layouts/NavbarComponent.vue';
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />
    <!-- Main Content: Dynamic Router View -->
    <main class="container mx-auto py-4">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import '@/assets/css/styles.css';
</style>
