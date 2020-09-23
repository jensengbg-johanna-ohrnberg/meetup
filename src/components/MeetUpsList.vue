<template>
    <section class="meet-ups">
        <ul class="list-items"
            v-for="items in data" :key="items.id"
            @click="goToJoinMeetUp(items.id)"
        >
            <li class="img"> <img :src="items.img" alt="image"> </li>
            <li class="name">  {{ items.name }} </li>
            <li class="type">  {{ items.type }}</li>
            <li class="date"> {{ items.date }} </li>
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
    props: {
        dataList: Array
    },
    methods: {
        goToJoinMeetUp(id) {
            this.$router.push({ name: 'Join', params: { id: Number(id) } })
        }
    }
}
</script>

<style scoped>
    .meet-ups {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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
        cursor: pointer;
    }

    .name {
        padding: 1em;
        font-size: 1.5em;
        font-weight: bold;
    }

    .type, .date {
        padding: 0.2em;
        font-size: 1.1em;
    }

    .img > img {
        width: 20em;
        height: 15em;
    }
</style>