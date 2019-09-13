<template lang="pug">
  .modal__add-movies
    .modal__bg(@click="toggleAddMovies")

    transition(name="modal-add")
      .modal__container(v-if="modalStatus === 'addMovie'")

        template(v-if="isLoading")
          .drop-area
            a
              span Agregar archivo&nbsp;
              | o arrastrarlo y soltarlo aquí

        template(v-if="!isLoading")
          .load-area

            template(v-if="!loadError")
              p(v-if="loadingProgress < 100") Cargando {{ loadingProgress }}%
              p(v-if="loadingProgress === 100")
                span Cargado {{ loadingProgress }}%

            template(v-else)
              p
                span Error!&nbsp;
                | No se pudo cargar la Película

            .progress-bar
              .inner(:class="{error: loadError}" :style="{'width': `${loadingProgress}%`}")

            template(v-if="!loadError")
              button.cancel cancelar
            template(v-else)
              button.cancel cancelar

        .input-area(:class="{disable: isLoading}")
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

        button.btn-upload(:class="{disable: isLoading}" @click="uploadMovie") Subir Película

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
      modalStatus: 'addMovie',
      isLoading: false,
      loadingProgress: 0,
      loadError: false
    }
  },
  created () {
    this.modalStatus = 'addMovie'
    this.isLoading = false
    this.loadingProgress = 0
    this.loadError = false
  },
  methods: {
    toggleAddMovies () {
      this.$bus.$emit('toggle-add-movie')
    },
    uploadMovie () {
      const self = this
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
          self.loadingProgress = i
          if (this.loadingProgress === 100) {
            console.log('finish')
            this.loadingProgress = 0
            this.data.title = this.movieName
            this.data.genre = this.movieGenre
            this.$bus.$emit('add-movie', JSON.stringify(this.data))
            this.modalStatus = 'success'
          }
        }, i * 200)
      }
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
