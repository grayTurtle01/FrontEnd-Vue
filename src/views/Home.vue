<template>

        <MenuSecction title="Sabores"  v-bind:array="$store.state.flavors"/>
        <MenuSecction title="Adornos"  v-bind:array="$store.state.adornos"/>


</template>





<script>
        import Card from '@/components/Card.vue'
        import MenuSecction from '@/components/MenuSecction.vue'

        export default{
                name: 'Home',
                components:{
                        Card,
                        MenuSecction
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

        #container{
        display: flex;
        justify-content: space-around
        }

        section h3{
        text-align: center
        }

</style>