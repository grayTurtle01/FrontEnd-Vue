<template>
    <section>
        <h3>Sabores Restantes</h3>
        <table border=3px>
            <tr>
                <th>Sabor</th> <th>Restantes</th>
            </tr>

            <tr v-for="sabor in $store.state.sabores_restantes">
                <td>{{sabor.name}}</td> <td>{{sabor.amount}}</td> 
            </tr>
            
        </table>

    </section>
</template>

<script>
    export default{
        name: 'SaboresRestantes'
    }
</script>