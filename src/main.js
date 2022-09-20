import { createApp } from 'vue';
// import { createAuth0 } from '@auth0/auth0-vue';
import { initializeApp } from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line camelcase
// import { domain, clientId as client_id } from '../auth_config.json';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBBiDfomoozDEdfwOwVFppUmxfkCLlfZTo',
    authDomain: 'site-achat.firebaseapp.com',
    projectId: 'site-achat',
    storageBucket: 'site-achat.appspot.com',
    messagingSenderId: '40289582374',
    appId: '1:40289582374:web:d9b4b061a3ea5e733b95e7',
    measurementId: 'G-FRNF2XP3C0',
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router)
    .mount('#app');
