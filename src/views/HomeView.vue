<script setup>

</script>

<template>
  <main class="home-container">
    <h1>Produits</h1>
    <div class="card-cart-container">
      <div class="card-container">
          <div class="card">
            <div class="img-container">
              <img src="https://i.ibb.co/B4grBGR/quarz-luxe.jpg" alt="">
            </div>
            <div class="card-text">
              <h3>description</h3>
              <span>10 €</span>
            </div>

            <div class="card-icons">
              <div class="like-container">
                <input type="checkbox" name="checkbox" id="1">
                <label for="id">
                  <i class="fas fa-heart"></i>
                </label>
              </div>
              <div class="add-to-cart">
                <button>
                  <img src="../src/assets/cart.svg" alt="">
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </main>
</template>
