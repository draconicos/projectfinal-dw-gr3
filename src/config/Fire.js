import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyCR1aS0OUnd6OLgQ4P-W6anI411f5w3tQM',
  authDomain: 'loginpfinal.firebaseapp.com',
  databaseURL: 'https://loginpfinal.firebaseio.com',
  projectId: 'loginpfinal',
  storageBucket: 'loginpfinal.appspot.com',
  messagingSenderId: '663039016825',
  appId: '1:663039016825:web:62c25c89201ee3dfd0b9a8',
  measurementId: 'G-J9JJNV0CQC',
};
const fire = firebase.initializeApp(config);
export default fire;
