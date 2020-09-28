<template>
  <div class="events container">
    <h2 class="subtitle is-3">
    Check out our upcoming events
    </h2>
    <div class="columns is-multiline">
        <div
            v-for="event in events"
            :event="event"
            :key="event.id"
            class="column is-one-quarter">
        <router-link
            :to="'/event/' + event.id">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/data.json";
import EventCard from '@/components/EventCard';
export default {
  name: 'EventsList',
  components : {
    EventCard
  },
  data () {
    return {
      event: {},
      events: data.events
    }
  }
}
</script>

<style lang="scss" scoped>
  .events {
    margin-top: 100px;
    text-align: center;
  }
</style>