<script setup lang="ts">
const reloadPage = () => {
  location.reload();
}
import { initializeApp } from 'firebase/app';

import firebaseConfig from '../firebase/firebaseConfig';

import { getFirestore, collection, getDocs, Firestore,addDoc } from 'firebase/firestore/lite';
import { getAuth, signOut, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db: Firestore) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const provider = new TwitterAuthProvider();
const auth = getAuth();
function API_TwitterLogout() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("LOGOUT OK")
  }).catch((error) => {
    // An error happened.
  });
}
function API_TwitterAuth(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    let token, secret;
    if (credential) {
      token = credential.accessToken;
      secret = credential.secret;    
    }

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
}
async function sendItem(this: any){
    try {
    const docRef = await addDoc(collection(db, "ranking"), {
      username: "Ada",
      time: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>

<template>
  <div>
    <v-btn @click="API_TwitterLogout()">Twitter LOGOUT</v-btn>   
    <v-btn @click="API_TwitterAuth()">Twitter</v-btn>     
    <v-btn @click="sendItem()">SEND</v-btn>
  </div>
</template>

<style scoped>
.BtnTop{
  margin-top: 3.4rem;
}
</style>
