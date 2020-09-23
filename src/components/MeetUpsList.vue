<template>
    <section class="meet-ups">
        <ul class="list-items"
            v-for="items in data" :key="items.id"
        >
            <img class="img" :src="items.img" alt="image">
            <li class="name">  {{ items.name }} </li>
            <section class="info">
                <li class="type border"> <span> Type: </span> {{ items.type }}</li>
                <li class="level border"> <span> Level: </span> {{ items.level }} </li>
                <li class="date border"> <span> Date: </span> {{ items.date }} </li>
                <li class="start-time border"> <span> Start Time: </span> {{ items.starttime }} </li>
                <li class="place border"> <span> Place: </span> {{ items.place }} </li>
                <li class="city border"> <span> City: </span> {{ items.city }} </li>
                <li class="country border"> <span> Country: </span> {{ items.country }} </li>
                <li class="price border"> <span> Price: </span> {{ items.price }} kr </li>
            </section>
            <button class="join-event button" @click="joinEvent"> Join Event </button>
            <button class="write-review button" @click="writeReview"> Write Review </button>
        </ul>

    </section>
</template>

<script>
import ListItems from '../data/data.json';

export default {
    name: "MeetUps",
    data() {
        return {
            data: ListItems
        }
    },
    methods: {
        writeReview() {
            this.$router.push('reviews')
        }
    }
}
</script>

<style scoped>
    .meet-ups {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    .list-items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        list-style: none;
        border: 1px solid #7122FA;
        padding: 1em;
        margin: 1em;
        background-color: white;
    }

    .name {
        padding: 1em;
        font-size: 1.5em;
        font-weight: bold;
    }

    .img {
        width: 100%;
        height: 20em;
    }

    span {
        font-weight: bold;
    }

   .info {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       text-align: center;
    }

    .border {
        padding: 1em;
        margin: 1em;
        color: #FFACFC;
        font-size: 20px;
    }

    .button {
        margin: 1em;
        padding: 1em;
        border-radius: 2em;
        background-color: #F148FB;
        border: 2px solid #7122FA;
        box-shadow: 2px 6px #7122FA;
        color: #FFACFC;
        font-weight: bold;
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        .list-items {
            width: 40%;
        }
    }
</style>