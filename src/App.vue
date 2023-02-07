<template>
  <div class="text-center">
    <img alt="Star Wars logo" class="logo" src="@/assets/logo-starwars.png">
    </div>
  <nav>    
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/" class="link">Starships</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
    box-sizing: border-box;
    background-color: #000;
    margin: 0;
    padding: 0;
}

.logo {
  width: 200px;
  margin-top: 20px;
}

nav{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1f1f1f;
  border-top-width: 2px;
  border-left: none;
  border-right: none;
  margin-top:20px;
  margin-bottom: 20px;
}

.link{
  border: 1px solid #1f1f1f;
  border-bottom-width: 3px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: #666666;
}

.link:hover{
  border-bottom-color: #0048a0;
  border-bottom-width: 3px;
  color: #fff
}
</style>
