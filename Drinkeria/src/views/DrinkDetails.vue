<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5x1 font-bold mb-5"> {{ drink.strDrink }}</h1>
        <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div> 
                <strong class="font-bold">Categoria:</strong> {{ drink.strCategory }}
            </div>
            <div> 
                <strong class="font-bold">Alcoolico:</strong> {{ drink.strAlcoholic }}
            </div>
            <div> 
                <strong class="font-bold">Recipiente:</strong> {{ drink.strGlass }}
            </div>
        </div>

        <div class="my-3">
            {{ drink.strInstructions }}
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2x1 font-semibold mb-2">Ingredientes</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(15)">
                        <li v-if="drink[`strIngredient${ind + 1}`]">
                            {{ ind + 1 }}. {{ drink[`strIngredient${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2x1 font-semibold mb-2">Medida para o preparo</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(15)">
                        <li v-if="drink[`strMeasure${ind + 1}`]">
                            {{ ind + 1 }}. {{ drink[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>

        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient';

const route = useRoute();
const drink = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        debugger;
        drink.value = data.drinks[0] || {}
    })

})

</script>