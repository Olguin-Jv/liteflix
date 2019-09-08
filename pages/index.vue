<template lang='pug'>
  .body
    template(v-if="!loadedData")
      p loading data...
    template(v-else)
      hero
      upcoming-movies
</template>

<script>
import Hero from '~/components/landing/Hero.vue'
import UpcomingMovies from '~/components/landing/UpcomingMovies.vue'
export default {
  components: {
    Hero,
    UpcomingMovies
  },
  data () {
    return {
      loadedData: true
    }
  }
}
</script>
