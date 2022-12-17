<template>
    <div class="container px-4 py-3 my-3 ">
        <div style=" height: 100vh;" class="row  align-items-center mb-3 ">
            <div class="col">
                
                <div class="my-5">
                    <h4 class=" fw-bold ">Hola, mi nombre es</h4>
                    <h1 class="display-3 fw-bold">{{name_portafolio}}.</h1>
                    <h3 class="display-4 fw-bold">El tamaño de tu éxito sera igual al de tu esfuerzo.</h3>
                    <div class="col-lg-8 ">
                        <p class="mb-4 mx-auto text-start">Soy estudiante <strong>Ingenieria de sistemas</strong> especializándome en la creación (y en ocasiones el diseño) de <strong>sitios web, aplicaciones web y aplicaciones de escritorio </strong>, que ayuden a solucionar necesidades y conlleven al éxito.</p>
                    </div>
                    
                </div>
                <div class=" btn-group">
                    <a target="_blank"  href="http://www.linkedin.com/in/leonardo-rivera-a83040250" class="btn btn-linkIcons" ><i class="fa-brands fa-linkedin-in fa-2xl   m-2"></i></a>
                    <a target="_blank"  href="https://www.facebook.com/people/Leonardo-Rivera/100016973262885/" class="btn btn-linkIcons"><i class="fa-brands fa-facebook fa-2xl  m-2"></i></a>
                    <a target="_blank"  href="https://github.com/dev-leonardorivera"  class="btn btn-linkIcons"><i class="fa-brands fa-github fa-2xl  m-2"></i></a>
                </div>
                <div class="text-center mt-5">
                    <p class="animacion"> <span class="text-red">Print(</span> <span class="text-green cursor">"Hello World!"</span> <span class="text-red">);</span></p>
                </div>
            </div>
        </div>

            
        

            
    </div>
</template>

<script>


export default {
  data () {
    return {
        top_espacio:'',
        name_portafolio: 'Leonardo Rivera',
       
    }
  },
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    

}
</script>

<style>



h1{
    color:var(--lightest-slate);

}
h4{
    color:var(--green);
    font-family: var(--font-mono);
    font-size: 1.5rem;
}

p{
    margin-top: 2rem;
    font-family: var(--font-sans);
    font-size: 1.1rem;
}

.text-red{
    color:var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: 1.5rem;

    
}
.cursor{
   
   
    font-family: var(--font-mono);
    position: relative;
    font-size: 1.5rem;

    

}

.cursor::after{
    
    content: "";
    
    border-left: var(--green) solid 2px;
    width: 0%;
    height: 100%;
    position: absolute;
    right: 0;
    background-color: var(--navy);
    animation: typing  3s infinite alternate steps(15),cursor 2s infinite;
    
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes cursor {50% {border-color: transparent}}

@media (max-width: 380px) {
    .text-red{
    color:var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: 1.2rem;

    
    }

    .cursor{
    
    
        font-family: var(--font-mono);
        position: relative;
        font-size: 1.2rem;

        

    }

    .cursor::after{
        
        content: "";
        
        border-left: var(--green) solid 2px;
        width: 0%;
        height: 100%;
        position: absolute;
        right: 0;
        
        background-color: var(--navy);
        animation: typing  3s infinite alternate steps(15),cursor 2s infinite;
        
    }
    
}

@media (max-width:314px){
    .text-red{
    color:var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: 1rem;

    
    }

    .cursor{
    
    
        font-family: var(--font-mono);
        position: relative;
        font-size: 1rem;

        

    }

    



}


</style>