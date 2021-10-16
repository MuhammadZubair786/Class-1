// const sig=()=>{
//     firebase.auth().createUserWithEmailAndPassword('mzhassan@gmail.com', '12ror56')
//   .then((result) => {
//     // Signed in 
//     var user = result.user;
//     document.getElementById('user_email').innerText += user.email
//     document.getElementById('user_name').innerText += user.displayName
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     // ..
//   });


// }



// const sigin = ()=>{
//     firebase.auth().signInWithEmailAndPassword('mzhassan@gmail.com', '12ror56')
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//        document.getElementById('user_email').innerText += user.email
//     document.getElementById('user_name').innerText += user.displayName
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }
var d =  document.getElementById('user_email')
console.log(d)

const Gsigin = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        document.getElementById('user_email').innerText +=` : `+user.email
        document.getElementById('user_name').innerText +=` : `+user.displayName
        document.getElementById('User_img').src =user.photoURL

        console.log(user)
      
    })
    .catch(console.log);
}

// const Gsigout = ()=>{
//     firebase.auth().signOut().then(() => {
//         document.getElementById('user_email').innerText = ' '
//         document.getElementById('user_name').innerText = ' '
//         document.getElementById('User_img').src =''
//       }).catch((error) => {
//         // An error happened.
//         console.log(error)
//       });
      
// }

const fbsig = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    console.log(user)

    document.getElementById('user_email').innerText +=` : `+user.email
    document.getElementById('user_name').innerText +=` : `+user.displayName
    document.getElementById('User_img').src =user.photoURL

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;


    console.log(errorMessage)
    // ...
  });

}


