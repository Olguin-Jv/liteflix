<template lang="pug">
  section#hero(:style="{'background-image': `url(${heroBg})`}")
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
</template>

<script>
export default {
  data () {
    return {
      heroBg: 'https://picsum.photos/1920/1080',
      movie: {
        title: 'Kids at school',
        plot: 'Lorem ipsum dolor amet chicharrones dreamcatcher hammock bushwick hell of, ethical 3 wolf moon celiac neutra mumblecore four dollar toast. Slow-carb post-ironic kickstarter synth franzen.'
      }
    }
  },
  methods: {
    strLimit (limit, str) {
      let txt = ''
      str.length > limit ? txt = `${str.slice(0, limit)}...` : txt = str
      return txt
    }
  }
}
/*
<div data-content="Some content goes here."></div>
[data-content]:before {
content: attr(data-content);
}
 */
</script>

<style lang="scss">
  @import "~/assets/scss/styles/landing/hero.scss";
</style>
