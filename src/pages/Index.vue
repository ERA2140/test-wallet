<template>
  <p class="flex  justify-center ">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" class="bg-green-800 text-white" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar"  class="bg-green-800 text-white" target="_blank">Volar</a>
  </p>

  <EthereumBalance></EthereumBalance>

  <div>
    <hr>
    <h2>Bonus</h2>
    <p>
      This app is in English only but can you manage both English and French?</p>
  </div>
</template>
<script setup lang="ts">
import EthereumBalance from "@/components/EthereumBalance.vue";

</script>
