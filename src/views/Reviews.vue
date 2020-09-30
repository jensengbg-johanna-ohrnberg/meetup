<template>
    <div class="container">
        <AddReview :event="event" @review-submitted="addReview" />
        <div id="reviews" class="container">
            <h2 class="title">Reviews</h2>
            <p class="subtitle" v-if="!reviews.length">There are no reviews yet.</p>
            <ul>
                <li v-for="review in reviews" :key="review.name">
                    <p>Event: {{ review.events }}</p>
                    <p>Name: {{ review.name }}</p>
                    <p>Rating: {{ review.rating }}</p>
                    <p>Review: {{ review.review }}</p>
                    <button class="button is-dark" @click="removeReview">Delete Review</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '../data/data.json'
import AddReview from '../components/AddReview'
export default {
    name: 'Reviews',
    components: {
        AddReview
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
        this.reviews = JSON.parse(localStorage.getItem('WRITE_REVIEW') || '[]');
    },
    methods: {
        addReview(productReview) {
            this.reviews.push(productReview);
            localStorage.setItem('WRITE_REVIEW', JSON.stringify(this.reviews));
        },
        removeReview(productReview) {
            this.reviews.splice(productReview, 1);
            localStorage.setItem('WRITE_REVIEW', JSON.stringify(this.reviews));
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