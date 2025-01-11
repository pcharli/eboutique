<template>
    <div class="card" :data-key="product.id">
            <div class="img-container">
              <img :src="product.img">
            </div>
            <div class="card-text">
              <h3>{{ product.description }}</h3>
              <span>{{ product.price }} €</span>
            </div>

            <div class="card-icons">
              <div class="like-container">
                <input type="checkbox" name="checkbox" id="1" :checked="product.favorite">
                <label for="id">
                  <i class="fas fa-heart" @click="switchFavorite(product)"></i>
                </label>
              </div>
              <div class="add-to-cart">
                <button>
                  <img src="../assets/cart.svg" alt="" class="cart">
                </button>
              </div>
            </div>
          </div>
</template>

<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['switch'])

  const switchFavorite = (product) => {
    //alert(product.id)
    emit('switch')
  }
</script>