<template>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
        <DrinkItem v-for="drink of drinks" :key="drink.idDrink" :drink="drink" />
    </div>
    <div v-if= "!drinks.lenght" class="flex justify-center text-gray-600 p-8">
        Não tem nenhum drink
    </div>
</template>

<script setup>
import DrinkItem from './DrinkItem.vue';

const { drinks } = defineProps({
    drinks: {
        required: true,
        type: Array
    }
})

</script>