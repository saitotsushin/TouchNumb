<template>
  <div class="bk"></div>
  <v-container class="container">
      <v-layout class="layout">
        <v-main>
          <router-view :key="$route.fullPath"/>
        </v-main>
        <v-footer app class="footer">created by saitotsushin</v-footer>
      </v-layout>
  </v-container>
</template>

<style scoped>
.bk{
  position: fixed;
  width: 100%;
  height: 100%;
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
