<template lang='pug'>
  div
    Nav
    transition(name="add-movies")
      add-movies(v-if="isAddMovies")
    nuxt
</template>

<script>
import Nav from '~/components/Nav.vue'
import AddMovies from '~/components/AddMovies.vue'

export default {
  components: {
    Nav,
    AddMovies
  },
  data () {
    return {
      isAddMovies: false
    }
  },
  created () {
    const self = this
    this.$bus.$on('toggle-add-movie', () => {
      self.isAddMovies = !self.isAddMovies
    })
  }
}
</script>

<style lang='scss'>
body {
  background-color: black; /*temporal*/
}
</style>
