<template>
    <div class="card">
        <img :src="require(`../assets/images/${image}`)" alt="Tres Chocolates">

        <h4 class="titulo">{{title}}</h4>
        <div class="precio">${{price}}</div>
    </div>
</template>

<script>
    export default{
        name: 'Card',
    
        props:{
            title: String,
            price: Number,
            image: String
        }

    }

</script>

<style scope>

    .card{
        border: 1px solid black;
        border-radius: 10px;
        
        width: 250px;

        margin: 10px;
        padding: 10px;

        padding-bottom: 30px;
        
    }

    .card img{
        width: 100%;
        height: 65%;
        border-radius: 10px;
        margin-bottom: 20px;

    }

    .titulo{
        color: #6D6E71;
        margin-bottom: 10px;
        font-size: 20px;

    }


    .precio{
        color: #3A160E;
        font-size: 30px;
        font-weight: bold;
    }

    .card:hover{
        box-shadow: 5px 5px 5px;
    }

</style>