<template lang='pug'>
  nav
    .container
      a.logo(href='#')
        img(src='img/liteflix-logo.svg' alt="liteflix logo")

      .menu
        .left
          .navigation
            nuxt-link(v-for='section in sections' :key="section.to" :to="section.to") {{section.name}}
          .add-btn-wrapp
            button(@click="click").add-btn
              span agregar película

        .right
          a Niños
          .bell-wrapp(:class="{active: bell}")
            .inner
          .menu-dropdown
            .inner(@click="toggleDropdown")
              .user-pic
                img(src='img/profile-placeholder.svg' alt='profile img')
            .dropdown(:class="{active: menuDropdown}")
              .user(v-for="user in users" :key="user.name")
                img(:src='user.img' alt='profile img')
                p {{ user.name }}
              .options
                nuxt-link(to="configuration") Configuración
                nuxt-link(to="help") Ayuda
                nuxt-link(to="/") Log Out

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
      users: [ /* hardcoded user list */
        { name: 'Ernesto Gonzalez', img: 'img/profile-placeholder.svg' },
        { name: 'User 02', img: 'img/profile-placeholder.svg' },
        { name: 'User 03', img: 'img/profile-placeholder.svg' }
      ],
      bell: false,
      menuDropdown: false
    }
  },
  methods: {
    click () {
      this.bell = !this.bell
    },
    toggleDropdown () {
      this.menuDropdown = !this.menuDropdown
    }
  }
}
</script>

<style lang='scss'>
  @import "~/assets/scss/styles/nav/desktop.scss";
</style>
