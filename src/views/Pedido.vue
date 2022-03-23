<template>

    <FormOrder />

    <Footer/>

 </template>

<script>

    import Footer from '@/components/Footer.vue'
    import FormOrder from '@/components/FormOrder.vue'

    export default{

        name: 'Pedido',

        components:{
            Footer,
            FormOrder
        }
    }

</script>

<style>
    
</style>