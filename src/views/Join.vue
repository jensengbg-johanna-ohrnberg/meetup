<template>
    <section class="join">
        <section class="fallback-section" v-if="meetUpById == null">
            <h1> Meet Up does not exist! </h1>
        </section>
        <section v-else>
            <img :src="meetUpById.img" alt="">
            <p> {{ meetUpById.name }} </p>
            <p> {{ meetUpById.type }} </p>
            <p> {{ meetUpById.date }} </p>
            <p> {{ meetUpById.starttime }} </p>
            <p> {{ meetUpById.place }} </p>
            <p> {{ meetUpById.city }} </p>
            <p> {{ meetUpById.country }} </p>
            <p> {{ meetUpById.price }} </p>
            <button @click="join"> Join Event </button>
        </section>
    </section>
</template>

<script>
export default {
    name: "Join",
    /*data() {
        return {
            meetup: []
        }
    },*/
    props: {
        id: Number
    },
    computed: {
        meetUpById() {
            return this.$store.state.meetUpList.find(el => el.id === this.id)
        }
    },
    mounted() {
        if (localStorage.getItem('meetup')) {
            try {
                this.meetup = JSON.parse(localStorage.getItem('meetup'))
            } catch (e) {
                localStorage.removeItem('meetup')
            }
        }
    },
    methods: {
        join() {
            this.meetup.push({ name: 'Hönsaryd Runt', type: 'exercise', price: 'Free' })
            this.saveToLocalStorage()
        },
        saveToLocalStorage() {
            const parsed = JSON.stringify(this.meetup)
            localStorage.setItem('meetup', parsed)
        }
    }
}
</script>

<style scoped>

</style>