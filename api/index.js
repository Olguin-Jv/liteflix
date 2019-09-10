import config from './config.js'

const { apiKey } = config

const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

export function getNowPlaying () {
  return fetch(nowPlayingURL)
    .then(req => req.json())
    .then(json => json.results[0])
}

export function getUpcomingMovies () {
  return fetch(upcomingURL)
    .then(req => req.json())
    .then(json => json.results.slice(0, 4))
}

export function getPopularMovies () {
  return fetch(popularURL)
    .then(req => req.json())
    .then(json => json.results.slice(0, 4))
}
