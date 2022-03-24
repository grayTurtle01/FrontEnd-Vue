<template>

    <h1>Pedidos</h1>
        <table border="2px" id="pedidos">
            <tr>
                <th>Id</th> 
                <th>Ingredientes</th> <th>Adornos</th> <th>Cantidad</th> <th>Descripción</th>
                <th>Cliente</th> <th>Teléfono</th> <th>Correo</th> <th>Fecha</th>
            </tr>

            <tr v-for="pedido in $store.state.pedidos">
                <td>{{pedido.id}}</td> 
                <td>{{pedido.sabores}}</td><td>{{pedido.adorno}}</td> <td>{{pedido.cantidad}}</td> <td>{{pedido.descripcion}}</td>
                <td>{{pedido.cliente}}</td> <td>{{pedido.telefono}}</td> <td>{{pedido.correo}}</td> <td>{{pedido.fecha}}</td>
            </tr>

        </table>

</template>

<script>
    export default{
        name: 'Pedidos',
    }
</script>

<style>
    table{
        margin: auto;
    }

    th, td{
        padding: 5px;
    }

    tr:nth-child(2n){
        background-color: lightgray;
    }

    th{
        background-color: gray;
    }


    h3, h1{
        margin: 20px 0;
        text-align: center;
    }
</style>
