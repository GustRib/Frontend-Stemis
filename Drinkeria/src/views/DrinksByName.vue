<template>
    <div class="p-8 pb-0">
        <input
        type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Pesquisar" 
        @change="searchDrinks"
        />
    </div>

    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <drinkItem v-for="drink of drinks" :key="drink.id" :drink="drink"/>
    </div>
</template>

<script setup>
import { compile, onMounted, ref } from 'vue';
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router"
import store from '../store';

const route = useRoute();
const keyword = ref('');
const drinks = computed(() => store.state.searchedDrinks);

function searchDrinks() {
    store.dispatch('searchDrinks', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchDrinks()
    }
})

</script>