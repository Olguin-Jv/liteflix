<template lang="pug">
  section#upcoming-movies
    transition-group(name="card").container.grid
      movie-card(v-for="(movie, index) in upcomingMovies"
                :key="movie.id"
                :card-type="'big'"
                :movie="movie")
</template>

<script>
import MovieCard from '~/components/landing/MovieCard.vue'
export default {
  name: 'UpcomingMovies',
  components: {
    MovieCard
  },
  data () {
    return {
      upcomingMovies: [
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
          title: 'black mirror',
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

/*
components: {
        PublisherGroup
    },
    props: {
        searchText: {
            type: String,
            default: ""
        },
        groups: Array,
        selectedGroupId: Number
    },

*/

</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/upcoming-movies.scss";

/*

  load img resources
  after load - callback
  then animate

*/
</style>
