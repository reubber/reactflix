import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBpoxr3eXoNLAtivyBmczgz4K4C1dCNx_Q",
  authDomain: "react-flix-f308c.firebaseapp.com",
  databaseURL: "https://react-flix-f308c.firebaseio.com",
  projectId: "react-flix-f308c",
  storageBucket: "react-flix-f308c.appspot.com",
  messagingSenderId: "145882920446",
  appId: "1:145882920446:web:ccb1c957f70c7526bb3caf",
  measurementId: "G-182RHVHS2K"
})

firebase.analytics();
const db = firebase.database()

export {db}