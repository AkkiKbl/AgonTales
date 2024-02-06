import * as firebase from 'firebase';
const firebaseConfig={
    apiKey: "AIzaSyAHeb7zeUytczRE0SvBhjU7FjBzDdZdEIQ",
    authDomain: "agontales-c3573.firebaseapp.com",
    projectId: "agontales-c3573",
    storageBucket: "agontales-c3573.appspot.com",
    messagingSenderId: "655108188124",
    appId: "1:655108188124:web:18c80c61810fe58d749119"
};

if(!firebase.app.length){
    const app = initializeApp(firebaseConfig);
}

export {firebase}