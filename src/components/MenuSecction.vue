<template>
    <section>
        <h2 class="section-title">{{title}}</h2>

        <div class="contenedor">

            <Card title="Tres Chocolates" price="435.00" image="tres-chocolates.jpg"/>
            
            <Card title="Red Velvet" price="400.00" image="red-velvet.jpg"/>

            <Card title="Zanahoria" price="395.00" image="zanahoria.jpg"/>

            <Card title="Mil Hojas" price="299.00" image="mil-hojas.png"/>

        </div>

    </section>
</template>

<script>
    import Card from './Card.vue'
    export default{
        name: 'MenuSecction',

        props: {
            title: String
        },

        components:{
            Card
        }
    }
</script>

<style>
	.section-title{
		text-align: center;
		font-size: 40px;
	}

	.contenedor{
		margin-top: 20px;
		margin-bottom: 50px;
		display: flex;
		flex-wrap: wrap;

		justify-content: center;
	}
</style>