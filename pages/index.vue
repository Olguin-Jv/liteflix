<template lang='pug'>
  .body
    hero
    upcoming-movies
    popular-movies
    my-movies
</template>

<script>
import Hero from '~/components/landing/Hero.vue'
import UpcomingMovies from '~/components/landing/UpcomingMovies.vue'
import PopularMovies from '~/components/landing/PopularMovies.vue'
import MyMovies from '~/components/landing/MyMovies.vue'
export default {
  components: {
    Hero,
    UpcomingMovies,
    PopularMovies,
    MyMovies
  }
}
</script>
