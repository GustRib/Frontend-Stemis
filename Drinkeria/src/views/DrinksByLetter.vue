<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link 
            :to="{name: 'byLetter', params: {letter}}" 
            v-for="letter of letters" 
            :key="letter"
        >
            {{ letter }}
        </router-link>
    </div>

    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <DrinkItem v-for="drink of drinks" :key="drink.idDrink" :drink="drink" />
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import DrinkItem from "../components/DrinkItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const drinks = computed(() => store.state.drinksByLetter)

watch(route, () => {
    store.dispatch('searchDrinksByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchDrinksByLetter', route.params.letter)
})


</script>