const div1= document.getElementById('div-1')
const div2 = document.getElementById('div-2')
const btn = document.querySelectorAll('button')

// Style
div1.style.textAlign = 'center'

div2.style.display = 'flex'
div2.style.justifyContent = 'center'

btn.forEach(btn => {
    btn.style.margin = '20px'
});


// Func

// Matematika
function luasLingkaran(jarijari){
    jarijari = Number(prompt('Masukkan Jari-Jari Lingkaran'))
    let LuasLingkaran = Math.PI * Math.pow(jarijari, 2)
    alert(`Jari-Jari Lingkaran : ${jarijari} 
    dan Luas Lingkaran : ${LuasLingkaran}`)
}

function luasSegitiga(){
    let alas = Number(prompt('Masukkan alas Segitiga'))
    let tinggi = Number(prompt('Masukkan tinggi Segitiga'))

    let LuasSegitiga = (alas * tinggi) /2
    alert(`Alas Segitiga : ${alas} \n Tinggi Segitiga : ${tinggi} \n Luas Segitiga : ${LuasSegitiga}`)
}

function luasPersegiPanjang(panjang,lebar){
    panjang = Number(prompt('Masukkan Panjang Persegi'))
    lebar = Number(prompt('Masukkan Lebar Persegi'))

    let LuasPersegiPanjang = panjang * lebar
    alert(`Panjang Persegi : ${panjang}\nLebar Persegi : ${lebar}\nLuasPersegi : ${LuasPersegiPanjang}`)
}

function luasJajarGenjang(alas,tinggi){
    alas = Number(prompt('Masukkan Alas Jajar Genjang'))
    tinggi = Number(prompt('Masukkan Tinggi Jajar Genjang '))

    let LuasJajarGenjang = alas * tinggi
    alert(`Alas Jajar Genjang ${alas}\nTinggi Jajar Genjang ${tinggi}\nLuas Jajar Genjang ${LuasJajarGenjang}`)
}

// Gaji

const gaji = document.getElementById('gaji')
gaji.style.background = 'lightgreen'
gaji.style.border = 'solid'
gaji.style.fontWeight = 'bold'


// FUNC
function hitungGaji(){
    let namaKaryawan = prompt('Masukkan Nama Anda')
    let gajiHarian = Number(prompt('Masukkan Gaji Harian anda'))
    let hariMasuk = Number(prompt('Berapa hari dalam sebulan anda masuk kerja?'))

    const gajiBulanan = gajiHarian * hariMasuk
    alert(`Nama Karyawan : ${namaKaryawan}\nAnda mendapatkan Gaji Bulanan sebesar : ${gajiBulanan}`)
}