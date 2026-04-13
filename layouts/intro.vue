<script setup>
import logo from '../public/techtown-logo.svg?url'
import noise from '../public/noise-light.png?url'
</script>

<template>
  <div class="slidev-layout intro">
    <div class="intro-left">
      <img :src="logo" alt="TechTown" class="intro-logo" />
      <div class="intro-text">
        <slot />
      </div>
    </div>
    <div class="intro-right">
      <div class="intro-decoration" :style="{ backgroundImage: `url(${noise})` }" />
    </div>
  </div>
</template>

<style scoped>
.intro {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 0;
  padding: 0;
  overflow: hidden;
}

.intro-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  gap: 2rem;
}

.intro-logo {
  height: 40px;
  width: auto;
  align-self: flex-start;
}

.intro-text :deep(h1) {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--tt-text);
  margin-bottom: 0.75rem;
}

.intro-text :deep(h2) {
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--tt-text-light);
}

.intro-text :deep(p) {
  font-size: 1.125rem;
  color: var(--tt-text-light);
}

.intro-right {
  position: relative;
  background: var(--tt-primary);
  overflow: hidden;
}

.intro-decoration {
  position: absolute;
  inset: 0;
  opacity: 0.15;
}
</style>
