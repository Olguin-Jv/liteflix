<template lang="pug">
  .modal__add-movies
    .modal__bg(@click="toggleAddMovies")
    .modal__container
      .drop-area
        a
          span Agregar archivo&nbsp;
          | o arrastrarlo y soltarlo aquí
      .input-area
        .wrapp
          p nombre de la pelicula
          input(v-model="movieName")
        .wrapp
          p categoría
          .select(@click="selectActive = !selectActive")
            p {{ movieGenre }}
            .select__dropdown(:class="{'active': selectActive}")
              .inner
                .option(v-for="(categorie, index) in categories" :key="index" @click="movieGenre = categorie") {{ categorie }}
      button.btn-upload(@click="addMovie") Subir Película
</template>

<script>
export default {
  name: 'AddMovies',
  data () {
    return {
      data: {},
      movieName: 'Ingresa el nombre',
      movieGenre: 'Selecciona categoría',
      categories: ['accion', 'animacion', 'aventuras', 'ciencia ficcion', 'comedia', 'documentales', 'drama', 'épicas', 'terror'],
      selectActive: false
    }
  },
  methods: {
    toggleAddMovies () {
      this.$bus.$emit('toggle-add-movie')
    },
    addMovie () {
      this.data.title = this.movieName
      this.data.genre = this.movieGenre
      this.$bus.$emit('add-movie', JSON.stringify(this.data))
      this.toggleAddMovies()
    },
    handleSelect (e) {
      this.movieGenre = e
      this.selectActive = false
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/add-movie.scss";
</style>
