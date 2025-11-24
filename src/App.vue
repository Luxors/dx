<script setup lang="ts">
function toggleTheme() {
  document.body.classList.toggle('dark')
}
</script>

<template>
  <div>
    <button type="button" @click="toggleTheme">toggle theme</button>
  </div>
  <header style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem">
    <RouterLink to="/buttons">buttons</RouterLink>
    <RouterLink to="/dropdownbox">dropdownbox</RouterLink>
    <RouterLink to="/textbox">textboxes</RouterLink>
    <RouterLink to="/toolbar">toolbar</RouterLink>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style lang="css" scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 1rem;
}
</style>
