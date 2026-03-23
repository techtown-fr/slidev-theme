<template>
  <div class="slidev-layout two-cols">
    <div class="col-left">
      <slot name="default" />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.col-left,
.col-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
