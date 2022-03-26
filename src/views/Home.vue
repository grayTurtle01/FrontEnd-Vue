<template>

	<MenuSecction title="Sabores"  :array="$store.state.flavors"/>
	<MenuSecction title="Adornos"  :array="$store.state.adornos"/>

	<Footer />
</template>





<script>
	import Card from '@/components/Card.vue'
	import MenuSecction from '@/components/MenuSecction.vue'
	import Footer from '@/components/Footer.vue'

	export default{
			name: 'Home',
			components:{
					Card,
					MenuSecction,
					Footer
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

	
	section h3{
	text-align: center
	}

</style>