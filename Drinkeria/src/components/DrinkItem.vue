<template>
    <div 
    class="bg-white shadow rounded-x1"
    >     
            <router-link :to="{name: 'drinkDetails', params: {id: drink.idDrink}}">
                <img
                    :src="drink.strDrinkThumb"
                    alt="drink.strDrink"
                    class="rounded-t-x1 w-full h-48 object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-semibold"> {{ drink.strDrink }}</h3>
                <p class="mb-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt consequatur quibusdam eos tempora.
                    </p>
            </div>
        </div>
</template>

<script setup>

const { drink } = defineProps ({
    drink: {
        require: true,
        type: Object
    }
})
</script>
