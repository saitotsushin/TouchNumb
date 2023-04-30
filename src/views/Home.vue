<script setup lang="ts">
import { ref, watch } from 'vue'
import TwitterAlignment from '../components/TwitterAlignment.vue';



const dialog = ref(false);

const name = ref("");
const time = ref(0);

</script>

<template>
    <v-card class="Card">
      <div class="Title">Touch<span>Numb</span></div>
      <div class="BtnList">
        
        <v-btn to="/game" class="Btn BtnStart" color="primary">GAME START</v-btn>
        <v-dialog
          v-model="dialog"
          width="400"
        >
          <template v-slot:activator="{ props }">
            <a
              class="text-decoration-none OpenDialogText text-black"
              v-bind="props"
            >ABOUT</a>
          </template>
          <v-card class="DiarlogCard">
            <v-card-title class="text-center">
              <span class="text-h4">ABOUT</span>
            </v-card-title>
            <v-card-text>
              1から順番に番号をタップしていき、最後の番号までのタイムを競います。<br/>
              （「タッチ ザ ナ◯バー」そのままです）<br/>
              <br/>
              Vue.jsの勉強のために作成。
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="orange-darken-1"
                variant="text" block
                @click="dialog = false"
              >
                CLOSE
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>  
    </v-card>
    <!-- <v-card class="Card">
      <TwitterAlignment/>
    </v-card> -->
</template>

<style scoped>
.Title{
  font-weight: bold;
  margin-bottom: 1.6rem;
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
}
.Title span{
  color:#f4ad21;
}
.Card{
  background-color: #FFF;
  padding: 2rem;
  margin-bottom: 1rem;
}
.BtnList{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.BtnList .Btn{
  margin-bottom: 2rem;
}
.BtnStart{
  padding: 1rem;
  height: auto;
}
.OpenDialogText{
  font-size: 0.75rem;
}
.OpenDialogText:hover{
  cursor: pointer;
}
.DiarlogCard{
  padding: 1.6rem 0rem 0rem 0rem;
}
</style>
