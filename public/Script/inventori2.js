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