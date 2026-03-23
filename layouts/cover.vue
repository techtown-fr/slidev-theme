<template>
  <div class="slidev-layout cover">
    <div class="cover-bg" />
    <div class="cover-content">
      <img src="/techtown-logo.svg" alt="TechTown" class="cover-logo" />
      <div class="cover-text">
        <slot />
      </div>
    </div>
    <div class="cover-footer">
      <span class="cover-date">{{ $slidev.configs.date || '' }}</span>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--tt-primary);
  color: var(--tt-text-white);
  padding: 3rem;
  overflow: hidden;
}

.cover-bg {
  position: absolute;
  inset: 0;
  background-image: url(/noise-light.png);
  opacity: 0.15;
  pointer-events: none;
}

.cover-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

.cover-logo {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
}

.cover-text :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  color: var(--tt-text-white);
  line-height: 1.1;
  margin-bottom: 0.75rem;
}

.cover-text :deep(h2) {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 0;
}

.cover-text :deep(p) {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 0;
}

.cover-footer {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 1;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>
