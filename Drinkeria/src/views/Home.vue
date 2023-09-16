<template>
    <pre>{{ drinks }}</pre>
</template>

<script setup>
import { computed } from 'vue';
import store from '../store';


const drinks = computed(() => store.state.drinks)

</script>
