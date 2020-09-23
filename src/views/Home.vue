<template>
  <div class="home">
    <MeetUpsList />
  </div>
</template>

<script>
import MeetUpsList from '../components/MeetUpsList.vue'

export default {
  name: "Home",
  components: {
    MeetUpsList
  }
};
</script>