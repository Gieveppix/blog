import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKpfuixql1Xu9642Z9YGINl-qZDBAOXnM",
    authDomain: "vueblog-34793.firebaseapp.com",
    projectId: "vueblog-34793",
    storageBucket: "vueblog-34793.appspot.com",
    messagingSenderId: "131749646190",
    appId: "1:131749646190:web:dc43932efb9b0280c9bb7f"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }