<template>
  <div class="slidev-layout fact">
    <div class="fact-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fact {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, var(--tt-gradient-start), var(--tt-gradient-end));
}

.fact-content {
  max-width: 75%;
}

.fact-content :deep(h1) {
  font-size: 4rem;
  font-weight: 700;
  color: var(--tt-primary);
  line-height: 1;
  margin-bottom: 1rem;
}

.fact-content :deep(p) {
  font-size: 1.25rem;
  color: var(--tt-text-light);
}
</style>
