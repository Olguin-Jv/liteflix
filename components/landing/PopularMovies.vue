<template lang="pug">
  section#popular-movies.container
    h2 Populares de liteflix
    transition-group(name="card").grid
      movie-card(v-for="(movie, index) in popularMovies.slice(0, 4)"
                :key="movie.id"
                :card-type="'big'"
                :movie="movie")
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
      popularMovies: []
    }
  },
  mounted () {
    const self = this
    getPopularMovies()
      .then(function (data) {
        self.popularMovies = data
      })
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/styles/landing/popular-movies.scss';
</style>
