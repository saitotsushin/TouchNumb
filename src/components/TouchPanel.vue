<script setup lang="ts">
import { ref,reactive, computed,defineEmits } from 'vue'

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
  <div class="card">
    <v-btn type="button" v-on:click="Touched" :class="{ disable: props.touched }">{{ index }}</v-btn>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #333;
}
.card{
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    padding: 4px;
    margin: 0;
    display: flex;
}
.card button{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #f4ad21;
    font-size: 2rem;
    font-weight: bold;
}
.card .disable{
  opacity: 0.1;
}
</style>
