// Your web app's Firebase configuration
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

    document.getElementById("btn-submit").addEventListener("click", () => {
        const nama = document.getElementById("nameField").value;
        const phone = document.getElementById("phoneField").value;
        const password = document.getElementById("passField").value;
        const email = document.getElementById("emailField").value;
  
        firebase.auth().createUserWithEmailAndPassword(email, password).then(({ user }) => {
          console.log(user)
            db.collection("user").add({
            Nama: nama,
            Telp: phone,
            Password: password,
            email: email,
            level: 'master',
            uid: user.uid
          })
  
          user.updateProfile({
            displayName: nama
          })
  
          alert("berhasil daftar");
        }).catch(error => {
          alert(error.message)
        })
      })