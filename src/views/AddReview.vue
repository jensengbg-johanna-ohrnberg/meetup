<template>
    <div class="event-single">
        <section class="hero has-background-info-light">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Add Review</h1>
                    <form @submit.prevent="onSubmit">
                        <p class="margin">
                            <label class="subtitle" for="name">Name</label>
                            <input class="input is-link" id="name" v-model="name" placeholder="name" required>
                        </p>

                        <p class="margin">
                            <label class="subtitle" for="review">Review</label>
                            <textarea class="textarea is-link" id="review" v-model="review" required></textarea>
                        </p>

                        <p class="margin">
                            <label class="subtitle rating" for="rating">Rating</label>
                            <select class="select is-link" id="rating" v-model.number="rating" required>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </select>
                        </p>

                        <input class="button is-dark" type="submit" value="Add Review">
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: [
        'event'
    ],
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
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

    .button {
        margin-top: 30px;
    }

    .margin {
        margin: 30px;
        margin-left: 0;
    }

    .rating {
        margin-right: 30px;
    }
</style>