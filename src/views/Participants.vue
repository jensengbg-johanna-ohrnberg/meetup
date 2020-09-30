<template>
    <div class="container">
        <JoinEvent :event="event" @joined-submitted="joinEvent" />
        <h2 class="title">Participants</h2>
        <p class="subtitle" v-if="!joined.length">There are no participants yet.</p>
        <ul>
            <li v-for="join in joined" :key="join.name">
                <p>Event: {{ join.events }}</p>
                <p>Name: {{ join.name }}</p>
                <p>Age: {{ join.age }}</p>
                <p>Level: {{ join.level }}</p>
                <button class="button is-dark" @click="unJoin">UnJoin</button>
                <button class="button is-dark" @click="goToReviews">Write a Review</button>
            </li>
        </ul>
    </div>
</template>

<script>
import data from '../data/data.json'
import JoinEvent from '../components/JoinEvent'
export default {
    name: 'Participants',
    components: {
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
    this.joined = JSON.parse(localStorage.getItem('JOIN_EVENT') || '[]');
  },
  methods: {
    joinEvent(productJoined) {
        this.joined.push(productJoined);
        localStorage.setItem('JOIN_EVENT', JSON.stringify(this.joined));
    },
    unJoin(productJoined) {
        this.joined.splice(productJoined, 1);
        localStorage.removeItem('JOIN_EVENT', JSON.stringify(this.joined));
    },
    goToReviews() {
        this.$router.push({ name: 'reviews' });
    }
  }
}
</script>

<style scoped>
    button {
        margin-top: 30px;
        margin-bottom: 30px;
        margin-right: 30px;
    }

    li {
        margin-top: 30px;
    }

    p {
        padding: 10px;
    }
</style>