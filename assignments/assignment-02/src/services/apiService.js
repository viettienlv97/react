const bearerToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjA0MWQyOWQyMTgzMmQ1NGExMmRmNzM3YzMxMTYxNyIsInN1YiI6IjY2NTgyZGZkNDQ0NmVlZjlmYTc0ZGVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5KPt2ggn1ELMDzSdtvS56Pzl6KgaQoHbg875gORQBDQ'
export const apiUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original/'
export const miniImageUrl = 'https://image.tmdb.org/t/p/w500/'
const API_KEY = ''

export const requests = {
  fetchTrending: `/trending/all/week?language=en-US`,
  fetchNetflixOriginals: `/discover/tv?with_network=123`,
  fetchTopRated: `/movie/top_rated?language=en-US`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
  fetchSearch: `/search/movie?language=en-US`
}

export const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json'
  }
}
// export const fetchNetflixOriginals = async () => {
//   const res = await fetch(
//     apiUrl + requests.fetchNetflixOriginals,
//     requestOptions
//   )
//   const data = await res.json()
//   return data
// }
