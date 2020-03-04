var db = firebase.firestore();
 
window.onload = function(){
document.getElementById("submit-brg").addEventListener("click", () =>{
    const barang = document.getElementById("inv-barang").value;
    const jumlah = document.getElementById("demo2").value;

    db.collection("inventori").add({
        Barang: barang,
        Jumlah: jumlah
    })
    alert("data berhasil ditambahkan");
})
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        let level = localStorage.getItem("level");
            if (level != "master") {
                    // console.log(level)
                    routeBasedOnLevel(level)
                }
                console.log(user)
                document.getElementById("hello-master").innerHTML = user.displayNama;

                let db = firebase.firestore();

                db.collection("inventori").orderBy("Barang").get().then(snapshots => {

                    snapshots.forEach(s => {
                        let data = s.data()

                        console.log(data["Barang"])

                        let tr = document.createElement("tr");


                        let tdNama = document.createElement("td")
                        tdNama.appendChild(document.createTextNode(data["inv-barang"]))
                        tr.appendChild(tdNama)

                        let tdPoint = document.createElement("td")
                        tdPoint.appendChild(document.createTextNode(data["demo2"]))
                        tr.appendChild(tdPoint)

                        document.getElementById("table-body").appendChild(tr)
                    })
                })
            } else {
                location.replace("index.html");
            }

        });