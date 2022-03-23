<template>
    <section class="menu-section">
        <h2 class="section-title">{{title}}</h2>

        <div class="contenedor">

			<Card v-for="item in array"
				v-bind:title="item.title"
				v-bind:price="item.price"
				v-bind:image="item.image"
			/>

        </div>

    </section>
</template>

<script>
    import Card from './Card.vue'
    export default{
        name: 'MenuSecction',

        props: {
            title: String,
			array: Object
        },

        components:{
            Card
        }
    }
</script>

<style scope>
	.menu-section{
		border: 1px solid black;
		border-radius: 10px;
		margin-bottom: 10px;
	}

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