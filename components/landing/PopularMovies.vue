<template lang="pug">
  section#popular-movies.container
    h2 Populares de liteflix
    transition-group(name="card").grid
      movie-card(v-for="(movie, index) in popularMovies"
                :key="movie.id"
                :card-type="'big'"
                :movie="movie")
</template>

<script>
import MovieCard from '~/components/landing/MovieCard.vue'
export default {
  name: 'PopularMovies',
  components: {
    MovieCard
  },
  data () {
    return {
      popularMovies: [
        {
          id: 1,
          title: 'the crown',
          coincidence: '98%',
          ageRate: '+16',
          duration: '1h 30 min',
          genre: 'suspenso',
          plot: 'some lorem ipsum',
          cover: 'https://picsum.photos/id/1073/300/200',
          poster: 'http://mickstorm.com/saved/16376400705d744927936473.37824127.jpg'
        },
        {
          id: 2,
          title: 'house of cards',
          coincidence: '98%',
          ageRate: '+16',
          duration: '1h 30 min',
          genre: 'suspenso',
          plot: 'some lorem ipsum',
          cover: 'https://picsum.photos/id/1073/300/200',
          poster: 'http://mickstorm.com/saved/16376400705d744927936473.37824127.jpg'
        },
        {
          id: 3,
          title: 'secret city',
          coincidence: '98%',
          ageRate: '+16',
          duration: '1h 30 min',
          genre: 'suspenso',
          plot: 'some lorem ipsum',
          cover: 'https://picsum.photos/id/1073/300/200',
          poster: 'http://mickstorm.com/saved/16376400705d744927936473.37824127.jpg'
        },
        {
          id: 4,
          title: 'club de legénde',
          coincidence: '98%',
          ageRate: '+16',
          duration: '1h 30 min',
          genre: 'suspenso',
          plot: 'some lorem ipsum',
          cover: 'https://picsum.photos/id/1073/300/200',
          poster: 'http://mickstorm.com/saved/16376400705d744927936473.37824127.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '~/assets/scss/styles/landing/popular-movies.scss';
</style>
