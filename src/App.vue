<template>
  
  <header>

    <div class="header-left">
        <img src="./assets/images/logo.png">  
    </div>

    <nav>
        <ul>
            <li><router-link to="/">Menú</router-link></li>
            <li><router-link to="/pedido">Ordenar</router-link></li>
            <li><router-link to="/dashboard">DashBoard</router-link></li>
        </ul>
    </nav>

  

  </header>
        
  <router-view/>

</template>

<script>
 
  export default{
    name: 'App',
    componets: {
    }
  }

</script>


<style scope>
  *{
    font-family: Arial, sans-serif;
  }


  header{
      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 5px 5px;

      padding: 5px;
      margin-bottom: 20px;

      margin: 10px 5px 20px 5px;
  }

  .header-left{
      display: flex;
      align-items: center;
      
  }

  .header-left img{
    width: 100px;
    margin-left: 20px;
  }

  /* NavList */
  nav ul{
      list-style: none;
  }

  ul li{
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;

      font-size: 20px;
      
  }

  li a {
      text-decoration: underline;
      color: black;
  }

  /********/


  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: underline;
  }

  /** Media queries ***/
  @media(max-width:600px){
    nav li{
      display: block;
    }
  }

</style>
