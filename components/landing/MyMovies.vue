<template lang="pug">
  div()
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
        localStorage.setItem('myLocalMovies', JSON.stringify(this.myLocalMovies))
      } else {
        const self = this
        const storedMovies = JSON.parse(localStorage.getItem('myLocalMovies'))
        storedMovies.list.forEach((movie) => {
          self.myLocalMovies.list.push(JSON.parse(movie))
        })
        console.log(storedMovies)
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
