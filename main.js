/* 
    Tugas Kecil by Dea Afrizal.
    yt : https://www.youtube.com/watch?v=mD6uSGSjgr4
**/

/*
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/

// 1. Prompt untuk mengetahui Saldo Akhir
let nama = "Ega Naww"
let usia = 18
let tinggiBadan = 160
let beratBadan
let pacar = 666

beratBadan = 70

if (pacar == null){
    pacar = "belum punya pacar"
} else {
    pacar = "udah punya pacar"
}

alert(
    `Nama Saya ${nama}, Usia saya ${usia}. Tinggi Badan saya adalah ${tinggiBadan} 
    dan Berat Badan saya adalah ${beratBadan}. Status saya ${pacar}`
)

let saldoAwal = Number(prompt("Masukkan Saldo Awal anda : "))
let saldoTambahan = 100000
const saldoAkhir = saldoAwal + saldoTambahan

alert(
    `Saldo Awal anda adalah ${saldoAwal} ditambah dengan Saldo tambahan anda adalah ${saldoTambahan}
    Jadi Saldo Akhir anda ${saldoAkhir}`
)

// 2. Menentukan hari yang ada di pc
let namaHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat","Sabtu","Minggu"]

let Hari = new Date().getDay()

let HariIni = Hari - 1
HariIni = namaHari[HariIni]

alert(
    `Hari ini adalah Hari ${HariIni}`
)