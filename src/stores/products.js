//import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
        { id: 1, description: "Quarz Luxe", price: 12, img: "https://i.ibb.co/B4grBGR/quarz-luxe.jpg", favorite: true},
        { id: 2, description: 'Curren Business', price: 20, img: "https://i.ibb.co/n6GFgv6/curren-business.jpg", favorite: false},
        { id: 3, description: 'Curren Sport', price: 5, img: "https://i.ibb.co/Y74GB7y/curren-sport.jpg" , favorite: false},
        { id: 4, description: 'Jaragar Racing', price: 8, img: "https://i.ibb.co/XXwP7cb/jaragar-racing.jpg" , favorite: false},
        { id: 5, description: 'Liges Hommes', price: 3, img: "https://i.ibb.co/x5ZnVwj/liges-hommes.jpg", favorite: false},
        { id: 6, description: 'Maserati Mechanical', price: 65, img: "https://i.ibb.co/NSWnpjS/maserati-mechanical.jpg", favorite: false},
        { id: 7, description: 'Montre Mecanique', price: 25, img: "https://i.ibb.co/cN8B3rm/montre-mecanique.jpg" , favorite: false},
        { id: 8, description: 'Brand Designer', price: 28, img: 'https://i.ibb.co/Pmtyp6R/brand-designer.jpg', favorite: false},
        { id: 9, description: 'Relogio Masculino', price: 4, img: "https://i.ibb.co/WnS3d6h/relogio-masculino.jpg", favorite: false},
        { id: 10, description: 'Tissot Multifunction', price: 29, img: "https://i.ibb.co/FD6wb7p/tissot-multifunction.jpg", favorite: true},
        { id: 11, description: 'Hip Hop Gold', price: 87, img: "https://i.ibb.co/WvVw5W7/hiphop-gold.jpg", favorite: true},
        { id: 12, description: 'Mesh Genova', price: 6, img: "https://i.ibb.co/qdHmbWJ/mesh-genova.jpg", favorite: true },
      ]
  }),
  getters: {
    getAllProducts: (state) => {
        return state.products
    }
  },
  actions: {
    addProduct(newProduct)  {
        //newProduct.value.favorite = false
        this.products.push(newProduct)
    }
  }
  })
