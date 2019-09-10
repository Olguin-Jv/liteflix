<template lang="pug">
  .movie-card(v-if="loaded" :class="cardType" :style="{'background-image': `url(${image.src})`}")
    .wrapper
      .movie-card__info

        button.btn-sm.play
        button.btn-sm.like
        button.btn-sm.add

        h3
          span(v-if="cardType === 'small'") {{ strLimit(19, movie.original_title) }}
          span(v-else) {{ movie.original_title }}

        .inner
          p 98% coincidencia
          p
            span.badge +16
          p &nbsp;1h 30 min
        p suspenso
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    cardType: {
      type: String,
      default: 'small'
    },
    movie: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loaded: false,
      bgSize: '',
      image: new Image()
    }
  },
  created () {
    this.getBgImage()
    this.loadImage(this.movie.backdrop_path)
  },
  methods: {
    getBgImage () {
      if (this.cardType === 'small') {
        this.bgSize = 'w342'
      } else {
        this.bgSize = 'w780'
      }
    },
    loadImage (path) {
      const self = this
      this.image.onload = function () {
        self.loaded = true
      }
      this.image.src = `https://image.tmdb.org/t/p/${this.bgSize + path}`
    },
    strLimit (limit, str) {
      let txt = ''
      str.length > limit ? txt = `${str.slice(0, limit)}...` : txt = str
      return txt
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/movie-card.scss";
</style>
