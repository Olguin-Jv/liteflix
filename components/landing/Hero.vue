<template lang="pug">
  transition(name="hero")
    section#hero(v-if="heroLoaded")
      .bg-wrapper(:style="{'filter': `blur(${blurAmount}px)`, 'transform': `translateY(${bgPosition}px)`}")
        .bg(:style="{'background-image': `url('${baseUrl + bgSize + movie.backdrop_path}')`}")
      .container
        .inner(:class="{'is-long': isLong(movie.original_title, 18)}")
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
      movie: {},
      bgImage: '',
      baseUrl: 'https://image.tmdb.org/t/p/',
      bgSize: '',
      bgPath: '',
      heroLoaded: false,
      timing: 0.1,
      animationDelay: 0,
      bgPosition: 0,
      blurAmount: 0
    }
  },
  mounted () {
    const self = this
    this.bgSize = this.calcImgsize()
    getNowPlaying()
      .then(function (data) {
        self.movie = data
      })
      .then(function () {
        self.animationDelay = self.movie.original_title.length
        self.bgImage = new Image()
        self.bgImage.onload = () => {
          self.heroLoaded = true
        }
        self.bgImage.src = self.baseUrl + self.bgSize + self.movie.backdrop_path
      })
    window.addEventListener('scroll', function () {
      self.bgPosition = Math.floor(window.scrollY / 2.25)
      self.blurAmount = Math.floor(window.scrollY / 100)
    })
    /**
     *
      mounted () {
        this.handleNavScroll()
        this.isLoaded = true
      },
      beforeDestroy () {
        window.removeEventListener('scroll', this.handleNavScroll)
      },
    */
  },
  methods: {
    strLimit (limit, str) {
      let txt = ''
      str.length > limit ? txt = `${str.slice(0, limit)}...` : txt = str
      return txt
    },
    calcImgsize () {
      const screenWidth = window.innerWidth
      if (screenWidth > 1366) {
        return 'original'
      } else if (screenWidth > 1024) {
        return 'w1280'
      } else {
        return 'w780'
      }
    },
    isLong (str, limit) {
      return str > limit
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/hero.scss";
</style>
