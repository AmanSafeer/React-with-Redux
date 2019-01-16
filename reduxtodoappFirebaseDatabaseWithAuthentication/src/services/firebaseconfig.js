import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDalrTqtN7_z3pyTWwH4Rv0LL983y8-vDs",
    authDomain: "todo-app-using-redux.firebaseapp.com",
    databaseURL: "https://todo-app-using-redux.firebaseio.com",
    projectId: "todo-app-using-redux",
    storageBucket: "todo-app-using-redux.appspot.com",
    messagingSenderId: "23516882938"
  };
  firebase.initializeApp(config);