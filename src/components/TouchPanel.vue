<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  index: Number,
  touched: Boolean
}>()

const emit = defineEmits([
  'touch-panel'
]);
const Touched = () => {
  emit('touch-panel',props.index);
}

</script>

<template>
  <div class="Card">
    <v-btn type="button" v-on:click="Touched" :class="{ disable: props.touched }">
      <span class="CardNumber">{{ index }}</span>
    </v-btn>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #333;
}
.Card{
  padding: 0;
  width: 100%;
}
.Card button{
    width: 100%;
    margin: 0;
    background-color: #f4ad21;
    font-size: 2rem;
    font-weight: bold;
    padding-top: 100%;
}
.Card .disable{
  opacity: 0.1;
}
.CardNumber {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
