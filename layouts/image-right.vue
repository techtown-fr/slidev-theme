<template>
  <div class="slidev-layout image-right">
    <div class="content">
      <slot />
    </div>
    <div
      class="image"
      :style="{ backgroundImage: `url(${$attrs.image})` }"
    />
  </div>
</template>

<style scoped>
.image-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 3rem;
}

.image {
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>
