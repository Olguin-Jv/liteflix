<template lang="pug">
  .movie-card(:class="cardType" :style="{'background-image': `url('${bgImg}')`}")
    .wrapper
      .movie-card__info
        h3 {{ movie.title }}
        .inner
          p {{ movie.coincidence }} coincidencia
          p
            span.badge {{ movie.ageRate }}
          p &nbsp;{{ movie.duration }}
        p {{ movie.genre }}
        button.btn-sm.play
        button.btn-sm.like
        button.btn-sm.add
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
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/movie-card.scss";
</style>
