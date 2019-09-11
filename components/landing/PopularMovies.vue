<template lang="pug">
  transition(name="popular-movies")
    section#popular-movies.container(v-if="popularLoaded")
      h2 Populares de liteflix
      transition-group(name="card").grid
        movie-card(v-for="(movie, index) in popularMovies"
                  :key="movie.id"
                  :card-type="'big'"
                  :movie="movie")
    section#upcoming-movies(v-else)
</template>

<script>
import MovieCard from '~/components/landing/MovieCard.vue'
import { getPopularMovies } from '~/api'

export default {
  name: 'PopularMovies',
  components: {
    MovieCard
  },
  data () {
    return {
      popularMovies: [],
      popularLoaded: false
    }
  },
  mounted () {
    const self = this
    getPopularMovies()
      .then(function (data) {
        self.popularMovies = data
      })
      .then(function () {
        self.popularLoaded = true
      })
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/styles/landing/popular-movies.scss';
</style>
