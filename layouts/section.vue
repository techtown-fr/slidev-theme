<template>
  <div class="slidev-layout section">
    <div class="section-accent" />
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--tt-gradient-start), var(--tt-gradient-end));
}

.section-accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: var(--tt-primary);
}

.section-content {
  padding-left: 2rem;
}

.section-content :deep(h1) {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--tt-primary);
  margin-bottom: 0.5rem;
}

.section-content :deep(p) {
  font-size: 1.25rem;
  color: var(--tt-text-light);
}
</style>
