<template>
  <div>
    <header>
      <h1>Search Your Movies Here!</h1>
    </header>
    <main>
      <input type="text" v-model="searchTerm" @keyup="searchMovies" placeholder="Search for a movie..." />

      <div v-if="isLoading" class="loading">Loading movies...</div>
      <div v-else-if="!movies.length" class="no-results">
        No movies found!
      </div>
      <div v-else class="movies-grid">
        <div v-for="movie in movies" :key="movie.imdbID" class="movie-card">
          <img :src="movie.Poster" :alt="movie.Title" />
          <a :href="`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=27f5875a`" target="_blank">{{ movie.Title }}</a>
          <p>{{ movie.Year }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      searchTerm: '',
      movies: [],
      isLoading: false,
      apiKey: '27f5875a',
    };
  },
  mounted() {
    this.fetchMovies('movie');

  },
  methods: {
    fetchMovies(searchTerm) {
      this.isLoading = true;
      const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${this.apiKey}`;
      axios.get(url).then((response) => {
        if (response.data.Search) {
          this.movies = response.data.Search;
        } else {
          this.movies = [];
        }
      })

      try {
        this.isLoading = false;

      } catch (error) {
        console.log(error);
      }
    },
    searchMovies() {
      if (this.searchTerm.trim() !== '') {
        this.fetchMovies(this.searchTerm);
      }
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  color: #191414;
  margin-top: 19px;
  text-align: center;
}

main {
  margin: 2rem;
  text-align: center;
}

input {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid rgb(210, 208, 190);
  outline: none;
  border-radius: 70px;
  box-shadow: 0 3px 3px rgb(234, 239, 238);
  width: 350px;
}

::placeholder {
  color: rgb(179, 167, 167);
}

.movies-grid {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.movie-card {
  width: 300px;
  height: 500px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
}

.movie-card img {
  width: 100%;
  height: 90%;
  border-radius: 5px;
}

.movie-card:hover {
  transform: scale(1.02);
  transition: 0.3s ease-in-out;
}

.movie-card {
  background: rgb(240, 233, 233);
  color: #000;
  text-decoration: none;
  padding: 0.5rem;
}

.movie-card :hover {
  cursor: pointer;
}

.movie-card a {
  height: 22px;
  width: 300px;
}

.movie-card a:hover {
  color: rgb(113, 127, 22);
}

.movie-card p {
  height: 22px;
  width: 300px;
}
</style>
