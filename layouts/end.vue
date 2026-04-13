<script setup>
import logo from '../public/techtown-logo.svg?url'
import noise from '../public/noise-light.png?url'
</script>

<template>
  <div class="slidev-layout end">
    <div class="end-bg" :style="{ backgroundImage: `url(${noise})` }" />
    <div class="end-content">
      <img :src="logo" alt="TechTown" class="end-logo" />
      <div class="end-text">
        <slot />
      </div>
      <div class="end-links">
        <span>techtown.fr</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.end {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--tt-bg-dark);
  color: var(--tt-text-white);
  overflow: hidden;
}

.end-bg {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
}

.end-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

.end-logo {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
}

.end-text :deep(h1) {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--tt-text-white);
}

.end-text :deep(p) {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
}

.end-links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
}
</style>
