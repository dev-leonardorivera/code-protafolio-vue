<template >
    <div id="about" class="container px-4 py-5 my-5">

        <div class="my-5">
            <h2 class="titulos"><span class="text-green">1.</span> Acerca de.</h2>
            <div class="row">
                <div class="col-12 col-md-7 my-5">
                    <p>Hola!, mi nombre es Leonardo Rivera y soy estudiante <strong>Ingenieria de sistemas</strong> especializándome en la creación (y en ocasiones el diseño) de <strong>sitios web, aplicaciones web y aplicaciones de escritorio </strong>, que ayuden y solucionen necesidades o problemas.</p>
                    <p>Me gusta estar en <b> constante aprendizaje </b> sobre nuevas tecnologías y asumir siempre nuevos retos. He creado varios proyectos personales con fines educativos, así como también algunos proyectos para terceros. Estoy abierto a nuevas oportunidades de trabajo donde yo pueda contribuir y aprender.</p>
                    <p>Si tienes una <strong>oportunidad de trabajo</strong> que concuerde con mis habilidades y experiencia o me pueda ayudar a conseguir nuevas <strong> contáctame.</strong></p>
                    <p>Algunas tecnologías con las que he estado trabajando recientemente:</p>
                    <div class="row">
                        <div class="col m-3">
                            
                            <span class="btn btn-download m-1" v-for="item in tengologias " :key="item">{{item}}</span>
                            
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-5 my-5">
                    <div class="cuadrado-perfil mx-auto d-block  " v-motion-pop-visible > 
                        <img  src="../assets/profile.jpg" class=" rounded img-big " alt=""/>
                    </div>
          
                </div>
            </div>
            
        </div>
       

            
    </div>
</template>

<script>


export default {
  data () {
    return {

        tengologias: ['HTML','Css','Javascrip','PHP','Python','Qt5','PyQt5','C++','Vue js','jQuery','Boostrap 5','Bulma Css','Atomic Design','Git','SQL','Maria DB','MySql','SQLite','Mongo DB' ]
        
   
        
      
    }
  },
    // eslint-disable-next-line vue/multi-word-component-names
    name:'About',
    

}
</script>

<style>
strong,b{
    color: var(--green);
}


.img-big{
    
    width: 20rem;
    height: 20rem;

}

.cuadrado-perfil{
    position: relative;
    width: 20rem;
    height: 20rem;

}
.cuadrado-perfil::after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 20rem;
    height: 20rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 1rem;
    top:1rem;

}
.cuadrado-perfil:hover:after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 20rem;
    height: 20rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 0.8rem;
    top:0.8rem;

    
    
    

}



.btn-download:hover{
   font-size:larger;
   transition: font-size 0.3s;
   

}


@media (max-width:365px) {

    .img-big{
    
    width: 18rem;
    height: 18rem;

}

.cuadrado-perfil{
    position: relative;
    width: 18rem;
    height: 18rem;

}
.cuadrado-perfil::after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 18rem;
    height: 18rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 1rem;
    top:1rem;

}
.cuadrado-perfil:hover:after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 18rem;
    height: 18rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 0.8rem;
    top:0.8rem;

    
    
    

}


}





</style>