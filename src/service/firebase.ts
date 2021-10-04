import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey:'AIzaSyAIor_XxQhPnkq-Fo0mhJbAe89PgKwUtHg',
  authDomain:"letmeask-12343.firebaseapp.com",
  databaseURL:"https://letmeask-12343-default-rtdb.firebaseio.com",
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }