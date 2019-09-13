<template lang="pug">
  div
    div(v-for='(movie, index) in myLocalMovies.list' :key="index") {{ movie.title }}

</template>

<script>
export default {
  name: 'MyMovies',
  data () {
    return {
      myLocalMovies: { list: [] }
    }
  },
  created () {
    const self = this
    this.$bus.$on('add-movie', function (movie) {
      self.myLocalMovies.list.push(JSON.parse(movie))
      self.toLocalStorage(movie)
    })
  },
  mounted () {
    this.checkLocalStorage()
  },
  methods: {
    checkLocalStorage () {
      if (localStorage.getItem('myLocalMovies') === null) {
        const newLocalMovies = { list: [] }
        this.myLocalMovies = newLocalMovies
        localStorage.setItem('myLocalMovies', JSON.stringify(newLocalMovies))
      } else {
        // this.myLocalMovies = JSON.parse(localStorage.getItem('myLocalMovies'))
      }
    },
    toLocalStorage (movie) {
      const localMovies = JSON.parse(localStorage.getItem('myLocalMovies'))
      localMovies.list.push(movie)
      localStorage.setItem('myLocalMovies', JSON.stringify(localMovies))
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  color: red;
}
</style>
