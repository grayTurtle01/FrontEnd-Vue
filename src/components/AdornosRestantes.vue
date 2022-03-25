<template>
    <section>
        <h3>Adornos Restantes</h3>
        <table border=3px>
            <tr>
                <th>Sabor</th> <th>Restantes</th>
            </tr>

            <tr v-for="adorno in $store.state.adornos_restantes">
                <td>{{adorno.name}}</td> <td>{{adorno.amount}}</td> 
            </tr>
            
        </table>

    </section>
</template>

<script>
    export default{
        name: 'AdornosRestantes'
    }
</script>

<style scope>
    td{
        text-align: center;
    }
</style>