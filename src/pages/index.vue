<template>
  <div style="position: relative; overflow: hidden; min-height: 100vh;">
    <!-- Video background -->
    <video autoplay muted loop playsinline class="background-video">
      <source src="@/assets/background-video.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Foreground content (HelloWorld) -->
    <div style="position: relative;">
      <Homepage />
    </div>
  </div>
</template>

<script lang="ts" setup>
// No changes in the script
</script>

<style scoped>
.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
