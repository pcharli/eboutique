<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
      <div class="nav-container">
        <div id="logo">
            <router-link to="/">
              <img src="https://i.ibb.co/6nhfJz5/wish-logo-800.png" alt="logo" />
            </router-link>
          </div>
          <ul class="icons">
            <li>
              <RouterLink to="/favoris">
                <i class="fas fa-heart"></i>
              </RouterLink>
            </li>
          </ul>
        
      </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
