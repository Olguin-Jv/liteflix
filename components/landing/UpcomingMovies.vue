<template lang="pug">
  transition(name="upcoming-movies")
    section#upcoming-movies(v-if="upcomingLoaded")
      h2.container Próximamente
      transition-group(name="card").grid.container
        movie-card(v-for="(movie, index) in upcomingMovies"
                  :key="movie.id"
                  :card-type="'small'"
                  :movie="movie")
    section#upcoming-movies(v-else)
      //- loader
</template>

<script>
import MovieCard from '~/components/landing/MovieCard.vue'
import Loader from '~/components/loader.vue'
import { getUpcomingMovies } from '~/api'

export default {
  name: 'UpcomingMovies',
  components: {
    MovieCard,
    Loader
  },
  data () {
    return {
      upcomingMovies: [],
      upcomingLoaded: false
    }
  },
  mounted () {
    const self = this
    getUpcomingMovies()
      .then(function (data) {
        self.upcomingMovies = data
      })
      .then(function () {
        self.upcomingLoaded = true
      })
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/upcoming-movies.scss";
</style>
