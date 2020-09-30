<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">Meety Meet Up</strong>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/participants" class="navbar-item">Join Events</router-link>
      <router-link to="/seereviews" class="navbar-item">Reviews</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>