<template>
    <SaboresRestantes />
    <Pedidos />
    <Footer   />
 </template>

<script>
    import Footer from '../components/Footer'
    import Pedidos from '../components/Pedidos'
    import SaboresRestantes from '../components/SaboresRestantes'

    export default{
        name: 'Pedido',
        components:{
            Footer,
            Pedidos,
            SaboresRestantes
        }
    }

</script>

<style>

</style>