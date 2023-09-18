<template>
    <div class ="p-8">
        <h1 class="text-4x1 font-bold mb-4">ingredientes</h1>
        <input
        type="text" 
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 w-full mb-3" 
        placeholder="Pesquisar por Ingredientes" 
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3"> 

            <a href="#"
                @click.prevent="openIngredient(ingredient)"
                v-for="ingredient of computedIngredients"
                :key="ingredient.idIngredient" 
                class="block bg-white rounded p-3 mb-3 shadow"
                >

            <h3 class="text-2x1 font-bold">{{ ingredient.strIngredient }}</h3>
            </a>    
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "vue";
import axiosClient from "../axiosClient";


const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
    if(!computedIngredients) return ingredients;
    return ingredients.value.filter(i => 
    i.strIngredient.toLowerCase().includes(keyword.toLowerCase())
    )
})

onMounted(() => {
    axiosClient.get('list.php?i=list').then(({ data }) => {
            ingredients.value = data.drinks;
    })
})

</script>