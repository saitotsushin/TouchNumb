<template>
    <v-card title="Card title" text="..." class="card">
      <div class="BtnList">
        <v-btn to="/game" class="Btn">GAME START</v-btn>
        <v-btn to="/about" class="Btn">ABOUT</v-btn>    
      </div>  
    </v-card>
</template>

<style scoped>
.card{
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
</style>
