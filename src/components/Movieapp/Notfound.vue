<template>
  <div id="body">
    <div class="error-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for is not here.</p>
      <a href="http://localhost:5173/"> Go Back to Home Page </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-container {
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgb(225, 231, 225);
}

h1 {
  font-size: 5rem;
  color: #159178;
}

p {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  background-color: #186e69;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: #1e8580;
  box-shadow: 0 0 2px #155d59;
}
</style>
