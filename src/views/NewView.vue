<script setup>
    import { ref } from 'vue'
    import { useProductsStore } from "@/stores/products"

    const storeP = useProductsStore()

    const newProduct = ref({
        price: 0,
        description:"",
        img: "",
        favorite: false
    })

    const addProduct = () => {
        storeP.addProduct( { ...newProduct.value} )
    }
</script>
<template>
    <main class="home-container">
    <h1>Ajouter un produit</h1>
    <form action="" class="form" @submit.prevent="addProduct">
    <div class="control">
        <label for="">Description</label>
        <input type="text" v-model.lazy.trim="newProduct.description">
    </div>
    <div class="control">
        <label for="">Prix</label>
        <input type="number" v-model.lazy="newProduct.price">
    </div>
    <div class="control">
        <label for="">Image</label>
        <input type="text" v-model.lazy.trim="newProduct.img">
    </div>
    <div class="control">
        
        <button>Envoyer</button>
    </div>
    </form>
    {{ newProduct }}
    </main>
</template>

<style>
    label {
        display: block;
    }
</style>