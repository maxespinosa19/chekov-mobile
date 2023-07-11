import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlYKXJxhytlTakCYLQXHAFbEDYARhufPA",
    authDomain: "chekov-me.firebaseapp.com",
    projectId: "chekov-me",
    storageBucket: "chekov-me.appspot.com",
    messagingSenderId: "775816859375",
    appId: "1:775816859375:web:7ef40d04e9f46bb44e151a"
};

const app = initializeApp(firebaseConfig)
export const Auth = getAuth(app) // need app inside for react native

