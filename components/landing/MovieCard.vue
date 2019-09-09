<template lang="pug">
  .movie-card(:class="cardType" :style="{'background-image': `url('https://image.tmdb.org/t/p/w342${movie.backdrop_path}')`}")
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
      bgImg: ''
    }
  },
  created () {
    this.getBgImage()
  },
  methods: {
    getBgImage () {
      if (this.cardType === 'small') {
        this.bgImg = this.movie.cover
      } else {
        this.bgImg = this.movie.poster
      }
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
