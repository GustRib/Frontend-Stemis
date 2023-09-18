<template>
    <div class="p-8 pb-0">
        <input
        type="text" 
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 w-full" 
        placeholder="Pesquisar" 
        @change="searchDrinks"
        />
    </div>

    <Drinks :drinks="drinks" />
</template>

<script setup>
import { compile, onMounted, ref } from 'vue';
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router"
import store from '../store';
import Drinks from "../components/Drinks.vue";


const route = useRoute();
const keyword = ref('');
const drinks = computed(() => store.state.searchedDrinks);

function searchDrinks() {
    if (keyword.value) {
        store.dispatch('searchDrinks', keyword.value)
    } else {
        store.commit('setSearchedDrinks', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchDrinks()
    }
})

</script>