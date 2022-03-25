<template>

     <form onsubmit=" return false;">
      <h2>Ingredientes</h2>
     
      <section id="contenedor-ingredientes">
          
          <div class="ingredientes-categoria">
              <h3>Seleccione Sabores</h3>
              
              <input type="checkbox" id="tres-chocolates" value="tres-chocolates" v-model="pedido.sabores">
              <label for="tres-chocolates">Tres Chocolates</label>
              <br>
          
              <input type="checkbox" id="red-velvet" value="red-velvet" v-model="pedido.sabores">
              <label for="red-velvet">Red Velvet</label>
              <br>

              <input type="checkbox" id="zanahoria" value="zanahoria" v-model="pedido.sabores">
              <label for="zanahoria">Zanahoria</label>
              <br>

              <input type="checkbox" id="mil-hojas" value="mil-hojas" v-model="pedido.sabores">
              <label for="mil-hojas">Mil-hojas</label>
              <br>

          </div>

          <div class="ingredientes-categoria">
              <h3>Seleccione Adorno</h3>
              
              <input type="radio" group="adorno" id="fondant" name="adorno" value="fondant" v-model="pedido.adorno">
              <label for="fondant">Fondant</label>
              <br>
          
              <input type="radio" group="adorno" id="frutales" name="adorno" value="frutales" v-model="pedido.adorno">
              <label for="frutales">Frutales</label>
              <br>

              <input type="radio" group="adorno" id="flores" name="adorno" value="flores" v-model="pedido.adorno">
              <label for="flores">Flores</label>
              <br>

              <input type="radio" group="adorno" id="dibujo" name="adorno" value="dibujo" v-model="pedido.adorno">
              <label for="dibujo">Dibujo</label>
              <br>

              <input type="radio" group="adorno" id="ninguno" name="adorno" value="none" checked v-model="pedido.adorno">
              <label for="ninguno">Sin Adorno</label>


          </div>

          <div class="ingredientes-categoria">
              <h3>Número de Pasteles</h3>
              <select v-model="pedido.cantidad">
                  <option value="1" >1 Pastel</option>
                  <option value="2">2 Pasteles</option>
                  <option value="3">3 Pasteles</option>
                  <option value="4">4 Pasteles</option>
                  <option value="5">5 Pasteles</option>
              </select>
          </div>    

          <div class="ingredientes-categoria">
              <h3 style="text-align:left">Descripción</h3>
              <textarea id="order-description" 
                        placeholder="Escriba una descripción de su pedido" 
                        style="resize:none"
                        v-model="pedido.descripcion"
              ></textarea>   
          </div>    


      </section>

      <h2>Datos de Contacto</h2>
      <section>

          <div class="string-field">
              <label for="nombre">Nombre<span>*</span></label><br>
              <input type="text" id="nombre"
                      placeholder="Nombre del cliente"  
                      class="input-string"
                      v-model="pedido.cliente"
                      required
                      
              >
          </div>

          <div class="string-field">
              <label for="telefono">Teléfono<span>*</span></label><br>
              <input type="tel" id="telefono"
                      placeholder="Numero (10 dígitos)"  
                      class="input-string"
                      pattern="[0-9]{10}"
                      v-model="pedido.telefono"
                      required
                      

              >
          </div>        

          <div class="string-field">
              <label for="correo">e-mail<span>*</span></label><br>
              <input type="email"  id="correo"
                      placeholder="Correo electrónico" 
                      class="input-string"
                      v-model="pedido.correo"
                      required

              >

          </div>

            <div class="string-field">
              <label for="fecha">Fecha Entrega<span>*</span></label><br>
              <input type="date"  id="fecha"
                      placeholder="Fecha de Entrega"  
                      class="input-string"
                      v-model="pedido.fecha"
                      required
                      

              >

          </div>
          
      </section>


      <div class="form-footer">
          <input type="submit" @click="$store.commit('agregarPedido', pedido)" value="Enviar Pedido">
      </div>
     </form>

</template>


<script>
    export default{
        name: 'FormOrder',

        data(){
            return{
                pedido: {
                    id: 0,
                    sabores : [],
                    adorno: '',
                    cantidad: 1,
                    descripcion: '',
                    cliente: '',
                    telefono: '',
                    correo: '',
                    fecha: ''
                },
            }
        },

        methods:{
           
        }
    }

</script>

<style>

    /*  Pedido form*/
    form{
        border: 1px solid black;
        border-radius: 10px;

        padding: 25px;

        margin: 5px;
    }

    form textarea{
        width: 220px;
        height: 70px;

    }

    label span{
        color: red;
    }


    .input-string{
        width: 170px;
    }

    form section{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .string-field{
        margin-top: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    #contenedor-ingredientes{
        display: flex;
        justify-content: space-around;
        margin-bottom: 40px;
    }

    .ingredientes-categoria{
        margin: 15px;
    }

    .ingredientes-categoria h3{
        margin-bottom: 10px;

    }


    .form-footer{
        margin-top: 15px;
        display:flex;
        justify-content: end;
    }

</style>