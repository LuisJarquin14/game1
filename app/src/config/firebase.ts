import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWo9i6V9Gdlimvawz5cHVN9VDH5Hwwrxs",
  authDomain: "truth-or-dare-game-3e871.firebaseapp.com",
  projectId: "truth-or-dare-game-3e871",
  storageBucket: "truth-or-dare-game-3e871.firebasestorage.app",
  messagingSenderId: "1060164956103",
  appId: "1:1060164956103:web:53eab19ea38570faf8f3e2",
  measurementId: "G-PRXQTXB9DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics only if not in development
let analytics;
try {
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    analytics = getAnalytics(app);
  }
} catch {
  console.log('Analytics not available in this environment');
}

export { analytics };
export default app;
