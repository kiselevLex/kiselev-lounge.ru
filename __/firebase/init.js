if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDB1iuUAEA2qf1behY01ECeBEoNhWDHsQE",
  "authDomain": "kiselev-lounge.firebaseapp.com",
  "databaseURL": "https://kiselev-lounge.firebaseio.com",
  "messagingSenderId": "229424949066",
  "projectId": "kiselev-lounge",
  "storageBucket": "kiselev-lounge.appspot.com"
});