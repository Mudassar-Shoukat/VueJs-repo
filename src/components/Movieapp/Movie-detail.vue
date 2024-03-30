<template>
  <div v-if="movie.imdbID" id="moviedetail">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h3>{{ movie.Title }}</h3>
    <p>Year: {{ movie.Year }}</p>
    <!-- <p>IMDB ID: {{ movie.imdbID }}</p> -->
  </div>
  <div v-else>
    <h2>Loading movie...</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: "",
    };
  },
  mounted() {
    const movieId = this.$route.params.id;
    const apiKey = "27f5875a";

    if (movieId) {
      axios
        .get(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
        .then((response) => {
          if (response.data) {
            this.movie = response.data;
          } else {
            console.error("Error fetching movie details:", response.data.Error);
          }
        });
    }
  },
};
</script>

<style scoped>
#moviedetail {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 30px;
  max-width: 310px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

#moviedetail img {
  height: 436px;
  width: 282px;
  margin: 2px;
  display: flex;
  border-radius: 5px;
}

#moviedetail h3 {
  margin-bottom: 5px;
  height: 22px;
  width: 300px;
  display: flex;
  justify-content: center;
  /* color: rgb(46, 19, 133); */
  overflow: hidden;
}

#moviedetail p {
  margin-bottom: 5px;
  height: 22px;
  width: 300px;
  display: flex;
  justify-content: center;
  color: rgb(219, 19, 89);
}
</style>
