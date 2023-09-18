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

<Drinks :drinks="drinks" />

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

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