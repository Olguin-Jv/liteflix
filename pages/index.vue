<template lang='pug'>
  .body
    template
      hero
      upcoming-movies
      popular-movies
</template>

<script>
import Hero from '~/components/landing/Hero.vue'
import UpcomingMovies from '~/components/landing/UpcomingMovies.vue'
import PopularMovies from '~/components/landing/PopularMovies.vue'
export default {
  components: {
    Hero,
    UpcomingMovies,
    PopularMovies
  }
}
</script>
