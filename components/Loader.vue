<template lang="pug">
  .loader-wrapper
    .loader
      div(v-for="n in 8")
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/loader.scss";
</style>
