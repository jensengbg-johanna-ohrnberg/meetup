<template>
  <div class="event-single">
    <section class="hero has-background-info-light">
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
          <JoinEvent :event="event" @joined-submitted="joinEvent" />
        </div>
      </div>
    </section>
    <div>
        <h2>Participants</h2>
        <p v-if="!joined.length">There are no participants yet.</p>
        <ul>
            <li v-for="join in joined" :key="join.name">
                <p>Name: {{ join.name }}</p>
                <p>Age: {{ join.age }}</p>
                <p>Level: {{ join.level }}</p>
            </li>
        </ul>
    </div>
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
    <AddReview :event="event" @review-submitted="addReview" />
    <div>
        <h2>Reviews</h2>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
            <li v-for="review in reviews" :key="review.name">
                <p>Name: {{ review.name }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>Review: {{ review.review }}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import data from '../data/data.json'
import AddReview from '../views/AddReview'
import JoinEvent from '../views/JoinEvent'
export default {
  name: 'EventSingle',
  components: {
      AddReview,
      JoinEvent
  },
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
      addReview(productReview) {
          this.reviews.push(productReview)
      },
      joinEvent(productJoined) {
          this.joined.push(productJoined)
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