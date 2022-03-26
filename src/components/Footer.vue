<template>

  
  <footer>
    <span>Calle Segunda #42</span> <span>Tel: 55-789-6543</span> <span>Horario: 11:00am- 7:00pm
</span>  </footer>

</template>

<script>
    export default{
        name: 'Footer'
    }
</script>

<style>


  footer{
      margin-top: 50px;
      
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
      
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 5px 5px;

      font-size: 20px;
      padding: 20px;

  }
</style>