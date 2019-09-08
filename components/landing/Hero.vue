<template lang="pug">
  transition(name="hero")
    section#hero(v-if="heroLoaded" :style="{'background-image': `url(${heroBg})`}")
      .container
        .inner
          h3
            | original de&nbsp;
            span liteflix
          h1  {{ movie.title }}
          .wrapp
            button.btn.play reproducir
            button.btn.add mi lista
          h4  Ver temporada 1
          p  {{ strLimit(210, movie.plot) }}
    section#hero(v-else)
      loader
</template>

<script>
import Loader from '~/components/loader.vue'
export default {
  name: 'Hero',
  components: {
    Loader
  },
  data () {
    return {
      heroBg: 'https://picsum.photos/1920/1080',
      movie: {
        title: 'Kids at school',
        plot: 'Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar toast. Slow-carb post-ironic kickstarter synth franzen.'
      },
      heroLoaded: true
    }
  },
  created () {
    /* add code here later */
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
