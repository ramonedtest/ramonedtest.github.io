importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyA1A5AmACIfWpjTUQ93HPv7wzuMK2evAvM",
    authDomain: "pushnotifications-e9a0e.firebaseapp.com",
    projectId: "pushnotifications-e9a0e",
    storageBucket: "pushnotifications-e9a0e.appspot.com",
    messagingSenderId: "313092521954",
    appId: "1:313092521954:web:3e2724e8dba49e814803bb",
    measurementId: "G-8ZB35LY1WL"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessagingHandler(function(payload){
    console.log(payload);
});