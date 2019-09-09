<template lang="pug">
  transition(name="hero")
    section#hero(v-if="heroLoaded")
      .bg(:style="{'background-image': `url('${baseUrl + movie.backdrop_path}')`}")
      .container
        .inner
          h3(:style="{'animation-delay': `${timing * animationDelay + .5}s`}")
            | original de&nbsp;
            span liteflix
          h1
            span(v-for="(letter, index) in movie.original_title" :style="{'animation-delay': `${timing * index}s`}") {{ letter }}
          .wrapp
            button.btn.play(:style="{'animation-delay': `${timing * animationDelay + .5}s`}") reproducir
            button.btn.add(:style="{'animation-delay': `${timing * animationDelay + .5}s`}") mi lista
          h4(:style="{'animation-delay': `${timing * animationDelay + .5}s`}")  Ver temporada 1
          p(:style="{'animation-delay': `${timing * animationDelay + .5}s`}")  {{ strLimit(210, movie.overview) }}
    section#hero(v-else)
      loader
</template>

<script>
import Loader from '~/components/loader.vue'
import { getNowPlaying } from '~/api'

export default {
  name: 'Hero',
  components: {
    Loader
  },
  data () {
    return {
      baseUrl: 'https://image.tmdb.org/t/p/original/',
      movie: {},
      nowPlaying: [],
      heroLoaded: false,
      timing: 0.1,
      animationDelay: 0
    }
  },
  mounted () {
    const self = this
    getNowPlaying()
      .then(function (data) {
        self.nowPlaying = data
        self.movie = data[0]
      })
      .then(function () {
        self.animationDelay = self.movie.original_title.length
      })
      .then(function () {
        self.heroLoaded = true
      })
  },
  methods: {
    strLimit (limit, str) {
      let txt = ''
      str.length > limit ? txt = `${str.slice(0, limit)}...` : txt = str
      return txt
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/hero.scss";
</style>
