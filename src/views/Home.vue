<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Welcome to Meety Meet Up
        </h1>
        <h2 class="subtitle">
          Make sure you check out our upcoming events below
        </h2>
      </div>
    </div>
  </section>
  <EventsList />
</div>
</template>

<script>
import EventsList from '../components/EventsList';
export default {
  name: 'home',
  components: {
    EventsList
  }
}
</script>

<style lang="scss" scoped>
    .hero {
        text-align: center;
        background-image: url('https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 400px;
    }

    .hero-body .title {
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
        padding: 40px 0 20px 0;
        font-size: 60px;
    }

    .subtitle {
        text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
        font-size: 30px;
    }

    .button-block {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        position: absolute;
        bottom: -150px;

        .button {
            margin-right: 50px;
            padding-left: 50px;
            padding-right: 50px;
        }
        .welcome {
            width: 400px;
            padding: 10px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    .is-xl {
        font-size: 1.7rem;
    }
</style>