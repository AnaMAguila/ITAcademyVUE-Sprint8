<template>
  <div class="text-center">
    <img alt="Star Wars logo" class="logo" src="@/assets/logo-starwars.jpg">
    </div>
  <nav class="text-center">    
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/">Starships</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
    box-sizing: border-box;
    background-color: #000;
    margin: 0;
    padding: 0;
}

.logo {
  width: 20%;
}
</style>
