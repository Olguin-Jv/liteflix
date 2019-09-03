<template lang='pug'>
  nav
    .container
      a.logo(href='#')
        img(src='img/liteflix-logo.svg' alt="liteflix logo")
      .menu
        .left
          .navigation
            nuxt-link(v-for='section in sections' :key="section.to" :to="section.to" title='title') {{section.name}}
          .add-btn-wrapp
            button(@click="click").add-btn
              span agregar película
        .right
          a Niños
          .bell-wrapp(:class="{active: bell}")
            .inner
          .dropdown
            .user-pic
              img(src='img/profile-placeholder.svg' alt='profile img')
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
