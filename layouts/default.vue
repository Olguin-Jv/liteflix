<template>
  <div>
    <Nav />
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">
  body {
    background-color: black; /*temporal*/
  }
</style>
