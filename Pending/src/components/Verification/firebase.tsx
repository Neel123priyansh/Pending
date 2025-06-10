// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu0Xs-YZK_4uoMkXgb9ou_e-dlhGyhH2g",
  authDomain: "otpv-42dc6.firebaseapp.com",
  projectId: "otpv-42dc6",
  storageBucket: "otpv-42dc6.firebasestorage.app",
  messagingSenderId: "794562531570",
  appId: "1:794562531570:web:cda860fa36f1b044d5006b",
  measurementId: "G-PV26T9WGFW"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage()

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
