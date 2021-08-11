// import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyBmnnPMOff0sHF5dWFAaTH4BYtBu_3XBXc",
    authDomain: "snappy-1ee91.firebaseapp.com",
    projectId: "snappy-1ee91",
    storageBucket: "snappy-1ee91.appspot.com",
    messagingSenderId: "479456671734",
    appId: "1:479456671734:web:fa0795a167f82ec8dab9d7"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export {firebase, FieldValue};