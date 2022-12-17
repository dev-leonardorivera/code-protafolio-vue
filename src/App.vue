<script >

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import HomeFooter from "./components/Homefooter.vue";
import navbarVue from "./components/min-components/navbar.vue";


export default {

  
   
    
    name:'app',
    components: { navbarVue, Home, About, Projects,Contact,HomeFooter},
    
}


</script>

<template>
  <div >
    
    
    <navbarVue></navbarVue>
    
    <home ></home>
    <div class="break"></div>
    <about></about>
    <div class="break"></div>
    <projects></projects>
    <div class="break"></div>
    <contact></contact>
    
    <HomeFooter></HomeFooter>
   


    
    

  </div>
  

  
</template>

<style scoped>

.break{ 
  
  width: 100vw;
  margin-bottom: 2rem;

}
</style>
