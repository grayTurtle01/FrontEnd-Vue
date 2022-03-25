import { createStore } from 'vuex'

export default createStore({
  state: {
    x: 42,

    flavors: [
      {
        title: 'Tres Chocolates',
        price: 435,
        image: 'tres-chocolates.jpg'
      },
      {
        title: 'Red Velvet',
        price: 400,
        image: 'red-velvet.jpg'
      },
      {
        title: 'Zanahoria',
        price: 395,
        image: 'zanahoria.jpg'
      },
      {
        title: 'Mil Hojas',
        price: 299,
        image: 'mil-hojas.png'
      }

    ],

    adornos: [
      {
        title: 'Fondant',
        price: 200,
        image: 'fondant.jpg'
      },
      {
        title: 'Frutales',
        price: 100,
        image: 'frutales.jpg'
      },
      {
        title: 'Flores',
        price: 150,
        image: 'flores.jpg'
      },
      {
        title: 'Dibujo',
        price: 99,
        image: 'dibujo.jpg'
      }

    ],

    sabores_restantes:[
      {
        name:"Tres Chocolates",
        amount: 1

      },
      {
        name:"Red Velvet",
        amount: 3

      },
      {
        name:"Zanahoria",
        amount: 4

      },
      {
        name:"Mil Hojas",
        amount: 0

      },

    ],

    adornos_restantes:[
      {
        name:"Fondant",
        amount: 2

      },
      {
        name:"Frutal",
        amount: 0

      },
      {
        name:"Flores",
        amount: 1

      },
      {
        name:"Dibujo",
        amount: 3

      },

    ],


    pedidos: [
      {
        id: 1,
        sabores: '3 chocolates',
        adorno: 'Flores',
        cantidad: 1,
        descripcion: 'Pastel de chocolate con flores',

        cliente: 'Juan Hernandez',
        telefono: '55-456-1234',
        correo: 'correo@mail.com',
        fecha: '2022-12-29'
       },
       {
        id: 2,
        sabores: 'Red Velvet',
        adorno: 'Fondant',
        cantidad: 1,
        descripcion: 'Pastel Fondant de Friends',
        cliente: 'Rachel Green',
        telefono: '32-246-8024',
        correo: 'rgreen@mail.com',
        fecha: '2022-04-27'
       },
       {
        id: 3,
        sabores: '3 chocolates, Zahanoria',
        adorno: 'Dibujo',
        cantidad: 2,
        descripcion: 'Pastel combinado',
        cliente: 'Bob Martinez',
        telefono: '76-333-4444',
        correo: 'bob@mail.com',
        fecha: '2022-05-02'
       }



    ]



  },

  getters: {
  },

  mutations: {
    agregarPedido(state, pedido){

        console.log(pedido)
        // check inputs
        if( pedido.sabores.length < 1){
          alert("Please select one flavor")
          return false;
        }
        
        if( pedido.cliente == ''){
          alert('Please put your name')
          return false;
        }

        if( pedido.telefono.length < 10){
          alert('Please enter a valid number')
          return false;
        }

        if( pedido.correo.length == '' ){
          alert('Please enter your e-mail')
          return false;
        }

        if( pedido.fecha == '' ){
          alert('Please enter a delivery date')
          return false;
        }

        pedido.sabores = pedido.sabores.join(', ')
        state.pedidos.push(pedido)
        console.log(state.pedidos)

        alert("Pedido Enviado :)")
    }
  },

  actions: {
  },
  modules: {
  }
})
