<template>
    <div class="container">
        <div id="reviews" class="container">
            <h2 class="title">Reviews</h2>
            <p class="subtitle" v-if="!reviews.length">There are no reviews yet.</p>
            <ul>
                <li v-for="review in reviews" :key="review.name">
                    <p>Event: {{ review.events }}</p>
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
export default {
    name: 'Reviews',
    data () {
        return {
            events: data.events,
            event: {},
            reviews: [],
            joined: []
        }
    },
    created() {
        this.reviews = JSON.parse(localStorage.getItem('WRITE_REVIEW') || '[]');
    }
}
</script>

<style scoped>
    p {
        padding: 10px;
    }

    li {
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid black;
    }
</style>