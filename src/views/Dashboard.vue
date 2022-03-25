<template>
    <div id="container" >
        <SaboresRestantes />
        <AdornosRestantes />
    </div>
    <Pedidos />
    <Footer   />
 </template>

<script>
    import Footer from '../components/Footer'
    import Pedidos from '../components/Pedidos'
    import SaboresRestantes from '../components/SaboresRestantes'
    import AdornosRestantes from '../components/AdornosRestantes'

    export default{
        name: 'Pedido',
        components:{
            Footer,
            Pedidos,
            SaboresRestantes,
            AdornosRestantes,
        }
    }

</script>

<style>

</style>