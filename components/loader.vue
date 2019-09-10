<template lang="pug">
  .loader
    p loading
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
  .loader {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(0);
      border-radius: 100%;
      width: 80px;
      height: 80px;
      border: 3px dashed red;
      transform-origin: center;
      animation-name: spin;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    @keyframes spin {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(180deg);
      }
    }
  }
</style>
