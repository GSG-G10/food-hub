import { initializeApp } from 'firebase/app';
import { getAnalytics, setUserProperties } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCa5dMdxBpmzAk3CaubduD5NZ7wcWfMrac',
  authDomain: 'foodhub-82793.firebaseapp.com',
  projectId: 'foodhub-82793',
  storageBucket: 'foodhub-82793.appspot.com',
  messagingSenderId: '116938202096',
  appId: '1:116938202096:web:a5be94a7ae1072e47b9b35',
  measurementId: 'G-M1CX32VRV3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
setUserProperties(analytics, { favorite_food: 'apples' });
