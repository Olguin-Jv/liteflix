<template lang="pug">
  section#upcoming-movies
    h2.container Próximamente
    transition-group(name="card").grid.container
      movie-card(v-for="(movie, index) in upcomingMovies.slice(0, 4)"
                :key="movie.id"
                :card-type="'small'"
                :movie="movie")
</template>

<script>
import MovieCard from '~/components/landing/MovieCard.vue'
import { getUpcomingMovies } from '~/api'

export default {
  name: 'UpcomingMovies',
  components: {
    MovieCard
  },
  data () {
    return {
      upcomingMovies: []
    }
  },
  mounted () {
    const self = this
    getUpcomingMovies()
      .then(function (data) {
        self.upcomingMovies = data
      })
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/upcoming-movies.scss";
</style>
