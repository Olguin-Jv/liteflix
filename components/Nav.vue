<template lang='pug'>
  nav
    .container
      .left
        a.logo(href='#')
          img(src='img/liteflix-logo.svg' alt="liteflix logo")
        .navigation
          nuxt-link(v-for='section in sections' :key="section.to" :to="section.to" title='title') {{section.name}}
        .add-wrapp
          button(@click="click").add-btn
            span agregar película
      .right
        a Niños
        .bell-wrapp(:class="{active: bell}")
          .inner
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
      ],
      bell: false
    }
  },
  methods: {
    click () {
      this.bell = !this.bell
    }
  }
}
</script>

<style lang='scss'>
  @import "~/assets/scss/styles/nav/desktop.scss";
</style>
