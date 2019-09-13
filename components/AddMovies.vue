<template lang="pug">
  .modal__add-movies
    .modal__bg(@click="toggleAddMovies")
    .modal__container
      .drop-area
        a
          span Agregar archivo&nbsp;
          | o arrastrarlo y soltarlo aquí
      .input-area
        input
        .drop
          button(@click="addMovie") add movie
</template>

<script>
export default {
  name: 'AddMovies',
  data () {
    return {
      data: { title: 'batman', caaategorie: 'berretas' }
    }
  },
  methods: {
    toggleAddMovies () {
      this.$bus.$emit('toggle-add-movie')
    },
    addMovie () {
      this.$bus.$emit('add-movie', JSON.stringify(this.data))
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/add-movie.scss";
</style>
