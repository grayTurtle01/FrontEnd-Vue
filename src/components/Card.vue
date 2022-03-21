<template>
    <div class="card">
        <img :src="require(`../assets/images/${image}`)" alt="Tres Chocolates">

        <h4>{{title}}</h4>
        <div class="precio">${{price}}</div>
    </div>
</template>

<script>
    export default{
        name: 'Card',
    
        props:{
            title: String,
            price: String,
            image: String
        }

    }

</script>