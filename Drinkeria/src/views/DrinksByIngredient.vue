<template>
    <Drinks :drinks = "drinks"/>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

const route = useRoute();
const drinks = computed(() => store.state.drinksByIngredient)

onMounted(() => {
    store.dispatch('searchDrinksByIngredients', route.params.ingredient)
})

</script>