<template>
  <div class="event-single">
    <section class="hero has-background-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
            <br>
            <strong>Price:</strong> {{ event.price }} kr
          </h2>
          <button class="button is-dark" @click="signUp">Sign Up for Event</button>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from '../data/data.json'
export default {
  name: 'EventSingle',
  data () {
    return {
        events: data.events,
        event: {},
        reviews: [],
        joined: []
    }
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  },
  methods: {
    signUp() {
      this.$router.push({ name: 'participants' });
    }
  }
}
</script>

<style lang="scss" scoped>
  .event-single {
    margin-top: 30px;
  }
  .hero {
    margin-bottom: 70px;
  }
  .event-images {
    margin-top: 50px;
  }
  .description {
    margin-bottom: 30px;
  }
</style>