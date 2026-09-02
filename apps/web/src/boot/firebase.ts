import { boot } from 'quasar/wrappers';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo-vl-docs.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-vl-docs',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo-vl-docs.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '000000000000',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'demo-app-id',
};

export default boot(() => {
  const app = getApps()[0] ?? initializeApp(firebaseConfig);
  const auth = getAuth(app);
  if (import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  }
});
