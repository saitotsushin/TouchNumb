<template>
  <div class="bk"></div>
  <v-container class="container">
      <v-layout class="layout">
        <v-main>
          <router-view />
        </v-main>
        <v-footer app class="footer">created by saitotsushin</v-footer>
      </v-layout>
  </v-container>
</template>

<style scoped>
.bk{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  top: 0;
  left: 0;
  z-index: 1;
}
.container{
  z-index: 2;
}
.container *{
  position: relative;
}
.footer{
  color: #acacac;
  background-color: transparent;
}
</style>
