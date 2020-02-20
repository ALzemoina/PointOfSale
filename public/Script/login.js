var firebaseConfig = {
    apiKey: "AIzaSyCRgjRfhTze6MdhoGNV1LvaGKGefJlifI0",
    authDomain: "pointofsale-6a544.firebaseapp.com",
    databaseURL: "https://pointofsale-6a544.firebaseio.com",
    projectId: "pointofsale-6a544",
    storageBucket: "pointofsale-6a544.appspot.com",
    messagingSenderId: "439780248877",
    appId: "1:439780248877:web:b44870e8926b87e96f17a4"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    document.getElementById("btn-login").addEventListener("click", () => {
      const email = document.getElementById("emailField").value;
      const password = document.getElementById("passField").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          db.collection('user').where('uid', '==', user.uid).get().then(snapshot => {
            if (snapshot.size <= 0) {
              alert("User tidak ditemukan")
            }

            snapshot.forEach(a => {
              let data = a.data()

              localStorage.setItem("username", data.Nama)
              localStorage.setItem("level", data.level)

              routeBasedOnLevel(data.level)
            })
          })

        }).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          alert(errorMessage);
          // ...
        });
      location.reload;
    })