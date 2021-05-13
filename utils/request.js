const API_KEY = "ab2cca9bcb6a07a842a659b7a733e2ab";

export default {
  fetchTredning: {
    title: "Trending",
    url: `trending/all/week?api_key=${API_KEY}&language=en_US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `movie/top_rated?api_key=${API_KEY}&language=en_US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    title: "Sci-Fi",
    url: `discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: "TV Series",
    url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
