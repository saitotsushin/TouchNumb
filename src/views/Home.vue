<script setup lang="ts">
import { ref,watch } from 'vue'

// const props = defineProps<{
//   dialog: false
// }>()

const dialog = ref(false);
</script>

<template>
    <v-card class="Card">
      <div class="Title">Touch<span>Numb</span></div>
      <div class="BtnList">
        <v-btn to="/game" class="Btn">GAME START</v-btn>
        <v-dialog
          v-model="dialog"
          width="400"
        >
          <template v-slot:activator="{ props }">
            <a
              class="text-decoration-none OpenDialogText"
              v-bind="props"
            >ABOUT</a>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">ABOUT</span>
            </v-card-title>
            <v-card-text>
              aaa
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green-darken-1"
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
</template>

<style scoped>
.Title{
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 2rem;
}
.Title span{
  color:#f4ad21;
}
.Card{
  background-color: #FFF;
  padding: 2rem;
}
.BtnList{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.BtnList .Btn{
  margin-bottom: 1rem;
}
.OpenDialogText{
  font-size: 0.75rem;
}
.OpenDialogText:hover{
  cursor: pointer;
}
</style>
