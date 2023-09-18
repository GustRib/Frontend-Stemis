<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 text-green-500 font-bold">
        Inicio
    </router-link>
        <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transitions-colors hover:bg-green-500 hover:text-white">
            Pesquisar Drinks
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transitions-colors hover:bg-green-500 hover:text-white">
            Pesquisar por Letras
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transitions-colors hover:bg-green-500 hover:text-white">
            Pesquisar por Ingredientes
        </router-link>
        </div>
    </header>
</template>