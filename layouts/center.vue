<template>
  <div class="slidev-layout center">
    <div class="center-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.center-content {
  max-width: 80%;
}

.center-content :deep(h1) {
  font-size: 2.5rem;
}

.center-content :deep(p) {
  font-size: 1.25rem;
}
</style>
