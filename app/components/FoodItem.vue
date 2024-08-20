<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/sanity.svg" v-show="isFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
    props: ['foodName','foodDesc','isFavorite'],
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName);
        }
    }
};
</script>

<style>
    img {
        height: 1.5em;
        float: right;
    }
</style>  