<template>
    <div class="event-single">
        <section class="hero has-background-info-light">
            <div class="hero-body">
                <div class="container">
                    <h4 class="title">Fill Out the Form to Join the Event</h4>
                    <form @submit.prevent="onSubmit">
                        <p class="margin">
                            <label class="subtitle level" for="level">Event</label>
                            <select class="select is-link" id="level" v-model="events" required>
                                <option>Soccer for Fun</option>
                                <option>Ice Hockey for Fun</option>
                                <option>Game Night</option>
                                <option>Book Night for Nerds</option>
                                <option>LAAN</option>
                                <option>Harry Potter Chat</option>
                            </select>
                        </p>

                        <p class="margin">
                            <label class="subtitle" for="name">Name</label>
                            <input class="input is-link" id="name" v-model="name" placeholder="name" required>
                        </p>

                        <p class="margin">
                            <label class="subtitle" for="age">Age</label>
                            <input class="input is-link" id="age" v-model.number="age" placeholder="age" required>
                        </p>

                        <p class="margin">
                            <label class="subtitle level" for="level">Level</label>
                            <select class="select is-link" id="level" v-model="level" required>
                                <option>Professional</option>
                                <option>Intermediate</option>
                                <option>Beginner</option>
                            </select>
                        </p>

                        <input class="button is-dark" type="submit" value="Join Event">
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
            events: null,
            name: null,
            age: null,
            level: null
        }
    },
    methods: {
        onSubmit() {
            let productJoined = {
                events: this.events,
                name: this.name,
                age: this.age,
                level: this.level
            }
            this.$emit('joined-submitted', productJoined)
            this.events = null
            this.name = null
            this.review = null
            this.rating = null
        }
    }
}
</script>

<style scoped>
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

    .level {
        margin-right: 30px;
    }
</style>