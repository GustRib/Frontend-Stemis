<template>
    <div class ="flex flex-col p-8">
        <input
        type="text" 
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="Pesquisar" 
        />

        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetra', params: {letra}}" v-for="letra of letras" :key="letra">
                {{ letra }}
            </router-link>

        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
