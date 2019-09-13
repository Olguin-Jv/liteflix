<template lang="pug">
  .modal__add-movies
    .modal__bg(@click="toggleAddMovies")

    transition(name="modal-add")
      .modal__container(v-if="modalStatus === 'addMovie'")
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
        button.btn-upload(@click="uploadMovie") Subir Película

    transition(name="modal-add")
      .modal__container.success(v-if="modalStatus === 'success'")
        div.liteflix-logo
            img(src='img/liteflix-logo.svg' alt="liteflix logo")
        h3 Felicitaciones!
        p
          span {{ movieName }}&nbsp;
          | fue agregado correctamente a la categoría&nbsp;
          span {{ movieGenre }}
        button.btn-close(@click="toggleAddMovies") Cerrar
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
      selectActive: false,
      modalStatus: 'addMovie'
    }
  },
  created () {
    this.modalStatus = 'addMovie'
  },
  methods: {
    toggleAddMovies () {
      this.$bus.$emit('toggle-add-movie')
    },
    uploadMovie () {
      this.data.title = this.movieName
      this.data.genre = this.movieGenre
      this.$bus.$emit('add-movie', JSON.stringify(this.data))
      this.modalStatus = 'success'
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
