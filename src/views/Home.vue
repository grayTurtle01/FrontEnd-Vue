<template>
        <h2 style="text-align:center">Sabores</h2>
        <div class="contenedor">

                <Card title="Tres Chocolates" price="435.00" image="tres-chocolates.jpg"/>
                
                <Card title="Red Velvet" price="400.00" image="red-velvet.jpg"/>

               <Card title="Zanahori" price="395.00" image="zanahoria.jpg"/>

               <Card title="Mil Hojas" price="299.00" image="mil-hojas.png"/>

        </div>

</template>





<script>
        import Card from '@/components/Card.vue'

        export default{
                name: 'Home',
                components:{
                        Card,
                }
        }

</script>

<style>
        h1{
        text-align: center;
        }

        #pedidos{
        margin: auto;
        }

        #container{
        display: flex;
        justify-content: space-around
        }

        section h3{
        text-align: center
        }


        .contenedor{
        margin-top: 25px;
        margin-bottom: 50px;
        display: flex;
        flex-wrap: wrap;
        
        justify-content: center;
        }

        .card{
        border: 1px solid black;
        border-radius: 10px;
        
        width: 250px;

        margin: 10px;
        padding: 10px;
        
        }

        .card img{
        width: 100%;
        height: 70%;
        border-radius: 10px;
        margin-bottom: 30px;

        }

        .card h4{
        color: #6D6E71;
        margin-bottom: 10px;

        }


        .precio{
        color: #3A160E;
        font-size: 25px;
        font-weight: bold;
        }


</style>