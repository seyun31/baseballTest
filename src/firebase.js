import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 (Firebase 콘솔에서 가져온 값 입력)
// commit Test
const firebaseConfig = {
    apiKey: "AIzaSyA1CjE5iIJuDOCjklnaRPe0ITmChtn-Q8w",
    authDomain: "baseballtest-visitor-tra-9043f.firebaseapp.com",
    projectId: "baseballtest-visitor-tra-9043f",
    storageBucket: "baseballtest-visitor-tra-9043f.firebasestorage.app",
    messagingSenderId: "439643556843",
    appId: "1:439643556843:web:fd2da238df9d3803a9a7ae"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
