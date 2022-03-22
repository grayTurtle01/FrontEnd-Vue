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

    ]

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
