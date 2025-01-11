<script setup>
  import OneProduct from '@/components/OneProduct.vue'
  import { ref } from 'vue'
  import { useProductsStore } from "@/stores/products"
  const products = ref([])

  const storeP = useProductsStore()

  products.value = storeP.getAllProducts

  const upgrade = () => {
    //console.log(products)
    products.value[0].price += 20
  }
</script>

<template>
  <main class="home-container">
    <h1>Produits</h1>
    <div class="card-cart-container">
      <div class="card-container">
          <OneProduct v-for="(product, key) in products" :product="product" @switch="product.favorite = !product.favorite"></OneProduct>
      </div>
    </div>
    <hr>
    <button v-on:click="upgrade">Augmenter le prix</button>
  </main>
</template>

<style>
.cart {
  height: 15px;
}
</style>