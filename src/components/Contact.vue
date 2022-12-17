<template >
    <div   id="Contact" class="container px-4 py-5 my-5 ">

        <div class="my-5">
            <h2 class="titulos"><span class="text-green">4.</span> Contacto.</h2>
            <div class="row mx-2">
                <div class="col-12 col-md-6 my-3">
                    <div class="dbox w-100 d-flex align-items-start my-3">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icons-contact fa-sharp fa-solid fa-location-dot fa-2x"></span>
                        </div>
                        <div class=" text pl-3" >
                            <p><span class="tag">Direccion:</span><span class="pointer"> Venezuela - Nueva Esparta</span></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-start my-3">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span  class="icons-contact fa-solid fa-phone fa-2x"></span>
                        </div>
                        <div class=" pl-3">
                            <p><span class="tag">Telefono:</span> <a class="pointer" target="_blank" href="https://wa.me/584123579763">+58-4123579763</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-start my-3">
                        <div class="icon d-flex align-items-center justify-content-center ">
                            <span class="icons-contact fa-solid fa-envelope fa-2x"></span>
                        </div>
                        <div class=" pl-3">
                            <p><span class="tag">Email:</span> <a class="pointer" href="mailto:leonardorivera1004@gmail.com">leonardorivera1004@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-start my-3">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="icons-contact fa-solid fa-earth-americas fa-2x"></span>
                        </div>
                        <div class=" pl-3">
                            <p><span class="tag">Website:</span> <a class="pointer" href="https://dev-leonardorivera.github.io/portafolio">dev-leonardorivera.github.io/portafolio</a></p>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-md-6 my-3">
                    <form  method="POST" id="contactForm" name="contactForm" class="contactForm">
                        <div class="row">
                            <div class="col-md-6  mb-2">
                                
                                <div class="form-group pointer">
                                    <label class="form-label" for="name"><span class="symbol">>_ </span>Nombre<span class="symbol">.</span></label>
                                    <input v-model="nombre" type="text" class="form-control" name="name" id="name" placeholder="Nombre">
                                </div>
                            </div>
                            <div class="col-md-6  mb-2"> 
                                <div class="form-group pointer">
                                    <label class="form-label" for="email"><span class="symbol">>_ </span>Email <span class="symbol">.</span></label>
                                    <input v-model="email" type="email" class="form-control" name="email" id="email" placeholder="Email@ejemplo.com" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}">
                                </div>
                            </div>
                            <div class="col-md-12  mb-2">
                                <div class="form-group pointer">
                                    <label class="form-label" for="subject"><span class="symbol">>_ </span>Asunto<span class="symbol">.</span></label>
                                    <input v-model="subject" type="text" class="form-control" name="subject" id="subject" placeholder="Asunto">
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <div class="form-group pointer">
                                    <label class="form-label" for="#"><span class="symbol">>_ </span>Message<span class="symbol">.</span></label>
                                    <textarea v-model="mensaje" name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Mensaje"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <a @click="enviar" class="btn btn-download">Enviar mensaje</a>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
                <div class="col-12">
                   
                    <div v-if="status==1"  >
                        <div  class="alert border-alert alert-dismissible fade show" role="alert" v-motion-pop>

                            <strong><i class="fa-solid fa-triangle-exclamation"></i> Ah ocurrido un error!</strong> Algunos de los campos estan vacios o no cumplen los requisitos .
                            <button @click="status=0"  type="button" class="btn btn-closed-alert"  aria-label="Close"> <i class="fa-solid fa-x"></i></button>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
       
        
            
    </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    
    enviar () {
        
        
        
        if(this.nombre==='' || this.email==='' || this.mensaje==='' || !this.email.includes('@')){
            /*alert("algunos de los campos estan vacios o no cumplen con lo requerido")*/
            this.status=1;

        }else{

         
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formsubmit.co/ajax/ca187890125ae3d83efed645ab8ad493', {
                Nombre: this.nombre,
                Email: this.email,
                Asunto: this.subject,
                message: this.mensaje
            })
                .then(function(response){
                   
                    if(response.status==200){                        
                        if(response.data.success === "true"){
                            alert(" Exelente!,el correo se ha enviado con exito gracias por enviarme un mensaje.");
  
                        }
                        
                    }
                })
                .catch(function(error){ 
                    alert("Ah Ocurrindo un error al enviar el correo: " +error );
                    console.log(error)});
            
                
                        
        }
            



            /*----------------- Regresamos todo a como estaba -----------------*/
            this.nombre='';
            this.email='';
            this.subject='';
            this.mensaje='';   
        }
    },

  
  data () {
    return {
        nombre:'',
        email:'',
        subject:'',
        mensaje:'',
        status:0,
        
 
    }
  },
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Contact',
    

}
</script>

<style>


.pointer{
    text-decoration: none;
    font-family: var(--font-sans);
    color:var(--lightest-slate);
}
.pointer:hover{
    color:var(--green);
}
.icons-contact{
    color:var(--green);
    margin-right: 1rem;
    
}

.tag{
    
    font-family: var(--font-sans);
    font-size: 1.2rem;
    font-weight: bold;

}


@media (max-width: 380px){
    .tag{
    
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: bold;

}}

.pointer{
    font-size: 1rem;
    text-decoration: none;
    font-family: var(--font-sans);
    color:var(--lightest-slate);
}
.pointer:hover{
    font-size: 1rem;
    color:var(--green);
}
.dbox:hover{
    font-size: 1.3rem;
    transition: all 0.3s;
    
}



</style>