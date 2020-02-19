function routeBasedOnLevel(level) {
    if (level == "manager") {
        alert("Selamat datang manager")
        location.replace("produk.html")
    } else if (level == "kasir") {
        alert("Anda adalah kasir")
        location.replace("produk.html")
    } else {
        alert("Anda adalah master")
        location.replace("dashboard.html")
    }
}