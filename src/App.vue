<template>
  <nav>
    <router-link to="/">Options API</router-link>   |
    <router-link to="/composition">Composition API</router-link>  |   
    <router-link
            :to="{
               name: 'passdata' ,
               params: { productName: pdtName}
            }"> Pass Data
    </router-link>
    <button name="click" @click='callme'> CGVAK </button>
    <!-- <div @click="window.location='https://www.g2.com/'"> G2 </div> -->
    <!-- <button @click="window.location.href('https://www.cgvakindia.com')" type="button" class="btn"> G2 </button>   -->
    
  </nav>
  <router-view/>
 
</template>

<script>
export default{
  data(){
    return {
      pdtName: 'Air Conditioner'
    }
  },
methods: {
   callme() {
  window.location.href = "https://www.cgvakindia.com/"
 // windpw.location.href = "http://localhost:8081/src/views/Composition.vue"
} } }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
