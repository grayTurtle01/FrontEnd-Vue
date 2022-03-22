<template>
    <section>
        <h2 class="section-title">{{title}}</h2>

        <div class="contenedor">

			<Card v-for="flavor in $store.state.flavors"
				v-bind:title="flavor.title"
				v-bind:price="flavor.price"
				v-bind:image="flavor.image"
			/>

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