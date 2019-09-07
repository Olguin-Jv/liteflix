<template lang='pug'>
  nav(:class="{'dark-bg': navBg}")
    .container
      a.logo(href='#')
        img(src='img/liteflix-logo.svg' alt="liteflix logo")

      .menu
        .left
          .navigation
            nuxt-link(v-for='section in sections' :key="section.to" :to="section.to") {{section.name}}
          .add-btn-wrapp
            button(@click="click").btn.add-animated
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
              .user(v-for="user in users" :key="user.name" @click="toggleDropdown")
                img(:src='user.img' alt='profile img')
                p {{ user.name }}
              .options
                nuxt-link(to="configuration" @click.native="toggleDropdown") Configuración
                nuxt-link(to="help" @click.native="toggleDropdown") Ayuda
                nuxt-link(to="/" @click.native="toggleDropdown") Log Out

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
      menuDropdown: false,
      navBg: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleNavScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleNavScroll)
  },
  methods: {
    click () {
      this.bell = !this.bell
    },
    toggleDropdown () {
      this.menuDropdown = !this.menuDropdown
    },
    handleNavScroll () {
      window.scrollY > 50 ? this.navBg = true : this.navBg = false
    }
  }
}
</script>

<style lang='scss'>
  @import "~/assets/scss/styles/nav/desktop.scss";
</style>
