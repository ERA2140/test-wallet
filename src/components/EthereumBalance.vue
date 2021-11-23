<template>
  <div>
<hr>
    <h2>Wallet test</h2>
    <p>
      Write a function that allow user to connect his metamask wallet on the ethereum network to our app when he click on connect button.<br>
      If the user has already connected his wallet you should hide the connect button and display the list of his accounts with the account balance in ETH.<br>
      You must get the account list only once on connection and save them on your state (store).<br>
      Finally, the user should be able to see the amount of each account in USDT. You can use <a href="https://coinmarketcap.com/">coinmarketcap</a> API to get the conversion rate.<br>
    </p>
    <button class="bg-green-800 text-white p-2 rounded" @click="connect()"> connect </button>
  </div>
</template>
<script setup lang="ts">

async function connect() {
 // have fun
}

</script>

<style scoped>
a {
  text-decoration: underline;
  color: rgb(42, 42, 199);
  font-weight: bold;
}
</style>
