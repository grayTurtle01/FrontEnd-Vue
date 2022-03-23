<template>

    <form onsubmit="alert('Pedido enviado :) '); return false;">

      <h2>Ingredientes</h2>    
      <section id="contenedor-ingredientes">
          
          <div class="ingredientes-categoria">
              <h3>Seleccione Sabores</h3>
              
              <input type="checkbox" id="tres-chocolates">
              <label for="tres-chocolates">Tres Chocolates</label>
              <br>
          
              <input type="checkbox" id="red-velvet">
              <label for="red-velvet">Red Velvet</label>
              <br>

              <input type="checkbox" id="zanahoria">
              <label for="zanahoria">Zanahoria</label>
              <br>

              <input type="checkbox" id="mil-hojas">
              <label for="mil-hojas">Mil-hojas</label>
              <br>

          </div>

          <div class="ingredientes-categoria">
              <h3>Seleccione Adorno</h3>
              
              <input type="radio" id="fondant" name="adorno">
              <label for="fondant">Fondant</label>
              <br>
          
              <input type="radio" id="frutales" name="adorno">
              <label for="frutales">Frutales</label>
              <br>

              <input type="radio" id="flores" name="adorno">
              <label for="flores">Flores</label>
              <br>

              <input type="radio" id="dibujo" name="adorno">
              <label for="dibujo">Dibujo</label>
              <br>

              <input type="radio" id="ninguno" name="adorno" checked>
              <label for="ninguno">Sin Adorno</label>


          </div>



          <div class="ingredientes-categoria">
              <h3>Número de Pasteles</h3>
              <select>
                  <option>1 Pastel</option>
                  <option>2 Pasteles</option>
                  <option>3 Pasteles</option>
                  <option>4 Pasteles</option>
                  <option>5 Pasteles</option>
              </select>
          </div>    

          <div class="ingredientes-categoria">
              <h3 style="text-align:left">Descripción</h3>
              <textarea placeholder="Escriba una descripción de su pedido" style="resize:none"></textarea>   
          </div>    


      </section>




      <h2>Datos de Contacto</h2>
      <section>

          <div class="string-field">
              <label for="nombre">Nombre<span>*</span></label><br>
              <input type="text" id="nombre"
                      placeholder="Nombre del cliente" required class="input-string"
              >
          </div>

          <div class="string-field">
              <label for="telefono">Teléfono<span>*</span></label><br>
              <input type="tel" id="telefono"
                      placeholder="Numero (10 dígitos)" required class="input-string"
                      pattern="[0-9]{10}"

              >
          </div>        

          <div class="string-field">
              <label for="correo">e-mail<span>*</span></label><br>
              <input type="email"  id="correo"
                      placeholder="Correo electrónico" required class="input-string"

              >

          </div>

            <div class="string-field">
              <label for="fecha">Fecha Entrega<span>*</span></label><br>
              <input type="date"  id="fecha"
                      placeholder="Fecha de Entrega" required class="input-string"

              >

          </div>
          
      </section>


      <div class="form-footer">
          <input type="submit" value="Enviar Pedido">
      </div>
    </form>

    <Footer/>
 </template>

<script>

    import Footer from '@/components/Footer.vue'

    export default{

        name: 'Pedido',

        components:{
            Footer
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