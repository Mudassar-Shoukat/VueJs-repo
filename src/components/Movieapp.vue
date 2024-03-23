<template>
  <div>
    <body>
      <header>
        <h1>Search Your Movies Here!</h1>
      </header>
      <main>
        <input type="text" id="searchInput"  @keyup="searchMovies()"
          placeholder="Search for a movie..."  />
        <div id="MoviesGrid"> </div>
      </main>
    </body>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchMovies();
    // setTimeout(this.searchMovies(), 8000);
  },

  methods: {
    fetchMovies() {
      const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a";
      const MoviesGrid = document.getElementById("MoviesGrid");
      MoviesGrid.innerHTML = "<p>Loading movies...</p>";
      const randomSearchTerms = ["movie"];

      fetch(`${apiKey}&s=${randomSearchTerms}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search && data.Search.length > 0) {
            this.moviesToShow(data.Search);
          } else {
            MoviesGrid.innerHTML = "<p>No random movies found!</p>";
          }
        });
    },

    moviesToShow(movies) {
      const MoviesGrid = document.getElementById("MoviesGrid");

      // Clear previous results
      MoviesGrid.innerHTML = "";

      // Display each movie in the results
      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <a href="http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a" target="_blank">${movie.Title}</a>
            <p>${movie.Year}</p>
          `;
        MoviesGrid.appendChild(movieCard);
      });
    },

    searchMovies() {
      const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a";
      const searchInput = document.getElementById("searchInput").value;
      console.log(searchInput);
      const MoviesGrid = document.getElementById("MoviesGrid");

      if (searchInput.trim() !== "") {
        MoviesGrid.innerHTML = "<p>Loading movies...</p>";

        fetch(`${apiKey}&s=${searchInput}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.Search) {
              this.moviesToShow(data.Search);
            } else {
              MoviesGrid.innerHTML =
                "<p>No movies found with the given name!</p>";
            }
          });
      }
    },
  },
};
</script>

<style>
body {
  /* background-color: #073838; */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}

header {
  width: 100%;
  color: #191414;
  /* padding: 1rem; */
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

#MoviesGrid {
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
  /* background-color: #f4f4f7; */
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
  color: red;
}
.movie-card p {
  height: 22px;
  width: 300px;
}
</style>
