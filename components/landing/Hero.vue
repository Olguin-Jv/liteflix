<template lang="pug">
  transition(name="hero")
    section#hero(v-if="heroLoaded" :style="{'background-image': `url('${baseUrl + movie.backdrop_path}')`}")
      .container
        .inner
          h3
            | original de&nbsp;
            span liteflix
          h1  {{ movie.original_title }}
          .wrapp
            button.btn.play reproducir
            button.btn.add mi lista
          h4  Ver temporada 1
          p  {{ strLimit(210, movie.overview) }}
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
      heroLoaded: false
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
