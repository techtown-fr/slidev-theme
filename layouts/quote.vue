<template>
  <div class="slidev-layout quote">
    <div class="quote-mark">"</div>
    <div class="quote-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.quote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.quote-mark {
  font-size: 8rem;
  font-weight: 700;
  color: var(--tt-primary);
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 1rem;
  left: 3rem;
}

.quote-content {
  max-width: 75%;
  position: relative;
  z-index: 1;
}

.quote-content :deep(p:first-child) {
  font-size: 1.75rem;
  font-weight: 500;
  font-style: italic;
  color: var(--tt-text);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.quote-content :deep(p:last-child) {
  font-size: 1rem;
  color: var(--tt-primary);
  font-weight: 600;
  font-style: normal;
}
</style>
