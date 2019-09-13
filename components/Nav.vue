<template lang='pug'>
  .nav-wrapper
    nav(:class="{'dark-bg': navBg}")
      transition(name="nav")
        .container(v-if="isLoaded")
          a.logo(href='#' :class="{active: menuDropdown}")
            img(src='img/liteflix-logo.svg' alt="liteflix logo")

          //- DESKTOP VERSION -//
          .menu
            .left
              .navigation
                nuxt-link(v-for='section in sections.slice(0,4)' :key="section.to" :to="section.to" :data-str="section.name") {{section.name}}
              .add-btn-wrapp
                button(@click="addMovie").btn.add-animated
                  span agregar película
            .right
              a Niños
              .bell-wrapp(:class="{active: bell}" @click="bellClick")
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

          //- MOBILE VERSION -//
    .mobile-dropdown
      button.burger-btn(@click="toggleDropdown")
        div(:class="{active: menuDropdown}")

    .dropdown-menu(:class="{active: menuDropdown}")
      a.logo(href='#')
        img(src='img/liteflix-logo.svg' alt="liteflix logo")
      .user(@click="toggleDropdown")
        img(src='img/profile-placeholder-2.svg' alt='profile img')
        p {{ users[0].name }}
      .wrapper.top
        nuxt-link(to="change-user" @click.native="toggleDropdown") cambia de usuario
        nuxt-link(to="config" @click.native="toggleDropdown") configuración
        nuxt-link(to="help" @click.native="toggleDropdown") ayuda
      .wrapper.bot
        nuxt-link(to="change-user" @click.native="toggleDropdown")
          .bell-wrapp(:class="{active: bell}" @click="bellClick")
            .inner
          span novedades
        nuxt-link(to="change-user" @click.native="toggleDropdown") series
        nuxt-link(to="change-user" @click.native="toggleDropdown") películas
        nuxt-link(to="change-user" @click.native="toggleDropdown") mi lista
        nuxt-link(to="change-user" @click.native="toggleDropdown") niños
        button(@click="() => {toggleDropdown(); addMovie();}").btn.add-animated.active
          span agregar película
        nuxt-link(to="change-user" @click.native="toggleDropdown") log out
    .bg(:class="{active: menuDropdown}" @click="toggleDropdown")
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      sections: [
        { name: 'Inicio', to: '/' },
        { name: 'Series', to: 'series' },
        { name: 'Películas', to: 'peliculas' },
        { name: 'Agregados recientemente', to: 'recientes' },
        { name: 'Mi lista', to: 'mis-listas' },
        { name: 'Niños', to: 'ninos' }
      ],
      users: [
        /* hardcoded user list */
        { name: 'Ernesto Garmendia', img: 'img/profile-placeholder-2.svg' },
        { name: 'User 02', img: 'img/profile-placeholder-2.svg' },
        { name: 'User 03', img: 'img/profile-placeholder-2.svg' }
      ],
      bell: false,
      menuDropdown: false,
      navBg: false,
      isLoaded: false,
      isMobile: false
    }
  },
  mounted () {
    this.handleNavScroll()
    window.addEventListener('scroll', this.handleNavScroll)
    this.isLoaded = true
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleNavScroll)
  },
  methods: {
    bellClick () {
      this.bell = !this.bell
    },
    toggleDropdown () {
      this.menuDropdown = !this.menuDropdown
    },
    handleNavScroll () {
      window.scrollY > 50 ? (this.navBg = true) : (this.navBg = false)
    },
    addMovie () {
      this.$bus.$emit('toggle-add-movie')
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/scss/styles/nav/desktop.scss';
.modal__modal {
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background-color: black;
  z-index: 200;
}
</style>
