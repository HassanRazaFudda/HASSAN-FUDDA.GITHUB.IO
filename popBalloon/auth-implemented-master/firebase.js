const firebaseConfig = {
    apiKey: "AIzaSyDla-UoDKEHANNOK3OIkN4jR4xgsZijGjw",
    authDomain: "balloon-pop-f8d32.firebaseapp.com",
    projectId: "balloon-pop-f8d32",
    storageBucket: "balloon-pop-f8d32.appspot.com",
    messagingSenderId: "608010626642",
    appId: "1:608010626642:web:c09c6c85b57dffc54e218b",
    measurementId: "G-1XZ3RZG4C8"
    };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const firestore = firebase.firestore();