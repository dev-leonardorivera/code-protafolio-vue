<template >
    <div id="projects" class="container px-4 py-5 my-5 ">

        <div class="my-5" v-if="$mq.min.md">
            <h2 class="titulos"><span class="text-green">2.</span> Proyectos.</h2>
            <div class="row py-5 my-5">
                
                <div class="col" >
                    <div >

                        <h2> <span class="symbol">>_ </span> Sistema de ventas y control de clientes para la gestion de gimnasios<span class="symbol">.</span></h2>
                        <p>Programa de Escritorio desarrollado para facilitar y gestionar los clientes de un gimnasio, con el fin de poder tener un registro de los clientes, sus pagos y la cantidad de dias pagados<span class="symbol">.</span></p>
                        <p>El mismo cuenta con control de acceso, seccion para registro de clientes, filtro para buscar los datos del cliente, sistema basico de ventas para el cobro de la cantindad de dias que el cliente hara uso del servicio servicio, area de configuracion de precio por dia y de descuentos. De esta manera se facilitan los procesos y se tiene un mejor registro de los clientes activos y no activos en un gimnasio<span class="symbol">.</span></p>
                    </div>
                   
                    <div>
                        
                        <!-- Modal -->
                        <div class="modal fade " id="exampleModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Galeria de fotos</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div v-if="projecto === 1">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img  src="../assets/gym/gym_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_2.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_3.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_4.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_5.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_6.png" class="d-block w-100" alt="...">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="projecto === 2">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img  src="../assets/seguridad/img_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/seguridad/img_2.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/seguridad/img_3.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/seguridad/img_4.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="projecto === 3">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                    
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img src="../assets//pomodoro/img_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_2.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_3.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_4.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_5.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Tegnologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p1_tengologias " :key="item">{{item}}</span>
                            
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="cuadrado mx-auto  d-block  " v-motion-slide-visible-right> 
                        <img loading="lazy" src="../assets/gym/gym_2.png" class=" rounded img-normal" alt=""/>
                        <div @click="projecto=1" class="text-sobre "  data-bs-toggle="modal" data-bs-target="#exampleModal">                                                    
                                    <h3 class="text-img">Ver mas.</h3>                              
                        </div>
                    </div>
          
                </div>
            </div>
            <div class="row py-5 my-5">
                <div class="col-12 col-md-6">
                    <div class="cuadrado mx-auto d-block  " v-motion-slide-visible-left > 
                        <img loading="lazy" src="../assets/seguridad/img_2.jpg" class=" rounded img-normal" alt=""/>
                        <div @click="projecto=2" class="text-sobre  " data-bs-toggle="modal" data-bs-target="#exampleModal">                                                    
                                    <h3 class="text-img">Ver mas.</h3>                              

                        </div>
                    </div>
          
                </div>
                <div class="col">
                    <h2> <span class="symbol">>_ </span> Sistema de control de empleados<span class="symbol">.</span></h2>
                    <p>Programa de Escritorio desarrollado para ayudar a las empresas a saber la cantidad de empleados con que cuenta y cuantos ha tenido en su trayectoria asi como tambien tener observaciones de cada empleado de forma rapida<span class="symbol">.</span></p>
                    <p>El mismo ofrece control de acceso al programa, registro de empleados, filtro para buecar empleados activos y no activos y un area para colocar una observacion del empleado<span class="symbol">.</span></p>
                    <h3>Tegnologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p2_tengologias " :key="item">{{item}}</span>
                            
                    </div>
                </div>
            </div>
            

            <div class="row py-5 my-5">
                <div class="col">
                    <h2> <span class="symbol">>_ </span> Pomodoro web<span class="symbol">.</span></h2>
                    <p>Aplicación Web desarrollada con JavaScript, HTML 5, css y Boostrap 5 orientada para mejorar la administración del tiempo dedicado a una actividad<span class="symbol">.</span></p>
                    
                    <h3>Tegnologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p3_tengologias" :key="item">{{item}}</span>
                            
                    </div>
                </div>
                <div class="col-12 col-md-5">
                    <div class="cuadrado mx-auto d-block  " v-motion-slide-visible-right> 
                        <img loading="lazy" src="../assets/pomodoro/img_1.jpg" class=" rounded img-normal" alt=""/>
                       
                        <div @click="projecto=3" class="text-sobre "  data-bs-toggle="modal" data-bs-target="#exampleModal">                                                    
                                    <h3 class="text-img">Ver mas.</h3>                              

                        </div>
                    </div>
          
                </div>
            </div>

            
            
        </div>
        <div class="my-5" v-else>
            <h2 class="titulos"><span class="text-green">2.</span> Proyectos.</h2>
            <div class="row ">
                <div class="col-12 col-md-5 my-5">
                    <div class="cuadrado mx-auto  d-block  " v-motion-pop-visible > 
                        <img loading="lazy" src="../assets/gym/gym_2.png" class=" rounded img-normal" alt=""/>
                    </div>
          
                </div>
                
                <div class="col">
                    <h2> <span class="symbol">>_</span> Sistema de ventas y control de clientes para la gestion de gimnasios<span class="symbol">.</span></h2>
                    <p>Programa de Escritorio desarrollado para facilitar y gestionar los clientes de un gimnasio, con el fin de poder tener un registro de los clientes, sus pagos y la cantidad de dias pagados<span class="symbol">.</span></p>
                    <p>El mismo cuenta con control de acceso, seccion para registro de clientes, filtro para buscar los datos del cliente, sistema basico de ventas para el cobro de la cantindad de dias que el cliente hara uso del servicio servicio, area de configuracion de precio por dia y de descuentos. De esta manera se facilitan los procesos y se tiene un mejor registro de los clientes activos y no activos en un gimnasio<span class="symbol">.</span></p>
                    <div>
                        <!-- Button trigger modal -->
                        <button @click="projecto=1" type="button" class="btn btn-download" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mas fotos del proyecto.
                        </button>


                         <!-- Modal -->
                        <div class="modal fade " id="exampleModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Galeria de fotos</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div v-if="projecto === 1">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img loadin src="../assets/gym/gym_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/gym/gym_2.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/gym/gym_3.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/gym/gym_4.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/gym/gym_5.png" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/gym/gym_6.png" class="d-block w-100" alt="...">
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="projecto === 2">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img src="../assets/seguridad/img_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/seguridad/img_2.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/seguridad/img_3.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="../assets/seguridad/img_4.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div v-if="projecto === 3">
                                        
                                            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                                    
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img  src="../assets/pomodoro/img_1.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_2.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_3.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_4.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img  src="../assets/pomodoro/img_5.jpg" class="d-block w-100" alt="...">
                                                    </div>
                                                    
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Tengologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p1_tengologias " :key="item">{{item}}</span>
                            
                    </div>
                </div>
                
            </div>
            <div class="row py-5 my-5">
                <div class="col-12 col-md-6 my-5">
                    <div class="cuadrado mx-auto d-block" v-motion-pop-visible > 
                        <img loading="lazy" src="../assets/seguridad/img_2.jpg" class=" rounded img-normal" alt=""/>
                    </div>
          
                </div>
                <div class="col">
                    <h2> <span class="symbol">>_ </span> Sistema de control de empleados<span class="symbol">.</span></h2>
                    <p>Programa de Escritorio desarrollado para ayudar a las empresas a saber la cantidad de empleados con que cuenta y cuantos ha tenido en su trayectoria asi como tambien tener observaciones de cada empleado de forma rapida<span class="symbol">.</span></p>
                    <p>El mismo ofrece control de acceso al programa, registro de empleados, filtro para buecar empleados activos y no activos y un area para colocar una observacion del empleado<span class="symbol">.</span></p>
                    <div>
                        <button @click="projecto=2" type="button" class="btn btn-download" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mas fotos del proyecto.
                        </button>

                    </div>
                    <h3>Tengologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p2_tengologias " :key="item">{{item}}</span>
                            
                    </div>
                </div>
            </div>
            

            <div class="row py-5 my-5">
                <div class="col-12 col-md-5 my-5">
                    <div class="cuadrado mx-auto d-block  " v-motion-pop-visible > 
                        <img loading="lazy" src="../assets/pomodoro/img_1.jpg" class=" rounded img-normal" alt=""/>
                    </div>
          
                </div>
                <div class="col">
                    <h2> <span class="symbol">>_ </span> Pomodoro web<span class="symbol">.</span></h2>
                    <p>Aplicación Web desarrollada con JavaScript, HTML 5, css y Boostrap 5 orientada para mejorar la administración del tiempo dedicado a una actividad<span class="symbol">.</span></p>
                    
                    <div>
                        <button @click="projecto=3" type="button" class="btn btn-download" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mas fotos del proyecto.
                        </button>

                    </div>
                    <h3>Tengologias empleadas<span class="symbol">:</span></h3>
                    <div >
                            
                        <span class="btn btn-download m-1" v-for="item in p3_tengologias " :key="item">{{item}}</span>
                            
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
      projecto: 0,
        p1_tengologias: ['Python','Css','PyQt5','Git','SQLite'],
        p2_tengologias: ['Python','Css','PyQt5','Git','Maria DB'],
        p3_tengologias: ['HTML','Css','JavaScrip','Git','Jquery','Boostrap 5']
        
      
    }
  },
    // eslint-disable-next-line vue/multi-word-component-names
    name:'About',
    

}
</script>

<style >


    strong,b{
        color: var(--green);
    }

    .symbol{
        font-family: var(--font-sans);
        color:var(--green)
    }
    .img-normal{
    
    width: 20rem;
    height: 18rem;

}

.cuadrado{
    position: relative;
    text-align: center;
    width: 20rem;
    height: 18rem;

}

.cuadrado::after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 20rem;
    height: 18rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 1rem;
    top:1rem;

}
.cuadrado:hover:after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 20rem;
    height: 18rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 0.8rem;
    top:0.8rem;
    transition:all 0.3s ;

    
    
    

}



.text-sobre{
    
    position: absolute;
   
    top: 0;
    width: 20rem;
    height: 18rem;
    opacity: 0;
    z-index: 10;

}
.text-sobre:hover{
    border: 2px;
    border-radius: 0.3rem;
    background-color: #020c1bb4;
    position: absolute;
    display: block;
    top: 0;
    width: 20rem;
    height: 18rem;
    opacity: 1;
    z-index: 10;
    cursor: pointer;
    transition:opacity 0.7s ;

}

.text-img{
    margin-top: 8rem;
    color:var(--lightest-slate)
}

.carousel-inner{
    width: 1000px;
}

@media (max-width:365px) {

    .img-normal{
    
    width: 18rem;
    height: 16rem;

}

    .cuadrado{
    position: relative;
    text-align: center;
    width: 18rem;
    height: 16rem;

}

    .cuadrado::after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 18rem;
    height: 16rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 1rem;
    top:1rem;

}
    .cuadrado:hover:after{
    content: "";
    z-index: -1;
    position: absolute;
    width: 18rem;
    height: 16rem;
    
    border: var(--green) solid 2px;
    border-radius: 0.3rem;
    left: 0.8rem;
    top:0.8rem;
    transition:all 0.3s ;

    
    
    

}
    
}


   



</style>