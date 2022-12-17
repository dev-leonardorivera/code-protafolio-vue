<template>
  
    <div>
        <div class="m-3 " v-if="$mq.min.md">
            <nav class="bg-navbar navbar fixed-top navbar-expand-md ">
                <div class="container-fluid">
                    <a href="#" class="btn btn-logo" ><i class="fa-solid fa-laptop-code"></i> {{nombre_page}}</a>
                    <div class="justify-content-end" >
                        <div class="navbar-nav  ">
                            <a class="nav-link text" href="#"><span class="text-green">1.</span> Inicio</a>
                            <a class="nav-link text" href="#about"><span class="text-green">2.</span> Acerca de</a>
                            <a class="nav-link text" href="#projects"><span class="text-green">3.</span> Proyectos</a>
                            <a class="nav-link text" href="#Contact"><span class="text-green">4.</span> Contacto</a>
                            <div class="d-md-block ms-3 ">
                                <a target="_blank"  href="/src/assets/resume.pdf" download="Curriculum" class="btn btn-download" >
                                    Curriculum
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="m-3" v-else>    
            <nav class=" bg-navbar navbar fixed-top navbar-expand-md ">
                <div class="container-fluid">
                    <a href="#" class="btn btn-logo" ><i class="fa-solid fa-laptop-code"></i> {{nombre_page}}</a>
                    <div class="justify-content-end" >
                        <div class="navbar-nav ">
                            <button class="btn btn-download" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>
                            <div class="offcanvas offcanvas-end bg-nav" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header justify-content-end">
                                    <button  type="button" class="btn btn-closed" data-bs-dismiss="offcanvas" aria-label="Close"> <i class="fa-solid fa-x"></i></button>
                                </div>
                                <div class="offcanvas-body mt-5  ">
                                    <div class="navbar-nav text-center ">
                                        <span class="text-green">1.</span>
                                        <a class="nav-link text "  href="#">Inicio</a>
                                        <span class="text-green">2.</span>
                                        <a class="nav-link text" href="#about">Acerca de</a>
                                        <span class="text-green">3.</span>
                                        <a class="nav-link text" href="#projects">Proyectos</a>
                                        <span class="text-green">4.</span>
                                        <a class="nav-link text" href="#Contact">Contacto</a>
                                        <div class="d-md-block  mt-4">
                                            <a target="_blank"  href="/src/assets/resume.pdf" download="leonardo-Rivera-Curriculum" class="btn btn-download" >
                                                Curriculum
                                            </a>
                                        </div>
                            
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    
  data () {
    return {
      nombre_page: 'Leonardo Rivera.',
    }
  },
    // eslint-disable-next-line vue/multi-word-component-names
    name:'navbar',


}
</script>

<style>
    .bg-navbar{
        background-color: var(--navy);
        
    }
   

</style>

