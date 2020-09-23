<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-button" to="/">Home</router-link>
      <router-link class="reviews-button" to="/reviews">Reviews</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    background-color: #560A86;
    padding: 1em;
  }

  #nav {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    flex-direction: row;
  }

  #nav > .home-button, .reviews-button {
    padding: 1em;
    font-size: 1.5em;
  }

  #nav > .home-button:hover, .reviews-button:hover {
    color: #D4A437;
  }

  .home-button, .reviews-button {
    color: #FFACFC;
    text-decoration: none;
  }
</style>
