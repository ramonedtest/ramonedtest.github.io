importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-messaging.js");

firebase.initializeApp({
    "messagingSenderId" : "313092521954"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessagingHandler(function(payload){
    console.log(payload);
});