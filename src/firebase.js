import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDB4HFpGQcSQ-bconlq9il1uPiPuYCKj3c",
	authDomain: "good-bad-list.firebaseapp.com",
	projectId: "good-bad-list",
	storageBucket: "good-bad-list.firebasestorage.app",
	messagingSenderId: "518089240397",
	appId: "1:518089240397:web:d5d6a585ba2a0f62985104",
	measurementId: "G-DWLQ76D8W6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}