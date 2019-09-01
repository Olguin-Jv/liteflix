<template lang='pug'>
  nav
    .container
      a.logo(href='#')
        img(src='img/liteflix-logo.svg')
      .navigation
        nuxt-link(v-for='section in sections' :key="section.to" :to="section.to" title='title') {{section.name}}

</template>

<script>
export default {
  data () {
    return {
      sections: [
        { name: 'inicio', to: '/' },
        { name: 'series', to: 'series' },
        { name: 'películas', to: 'peliculas' },
        { name: 'agregados recientemente', to: 'recientes' },
        { name: 'mi lista', to: 'mis-listas' }
      ]
    }
  }
}
</script>

<style lang='scss'>
  nav {
    .container {
      display: flex;
      a.logo {
        display: block;
        line-height: 0;
      }
    }
  }
</style>
