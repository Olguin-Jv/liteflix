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
</template>

<script>
export default {
  name: 'AddMovies',
  methods: {
    toggleAddMovies () {
      this.$bus.$emit('toggle-add-movie')
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/styles/elements/add-movie.scss";
</style>
