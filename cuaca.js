const https = require('https');  
const readline = require('readline');  

// Masukkan API key dari OpenWeatherMap langsung ke dalam kode  
const apiKey = 'fd9c80c3d92f8e2e6bcde079fc7d56e4'; // Ganti dengan API key Anda  

// Fungsi untuk mengambil data cuaca berdasarkan nama kota  
function getWeather(city) {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

    https.get(url, (resp) => {  
        let data = '';  

        // Menerima data dari API dalam bentuk chunk  
        resp.on('data', (chunk) => {  
            data += chunk;  
        });  

        // Setelah data lengkap diterima, parse dan tampilkan informasi cuaca  
        resp.on('end', () => {  
            try {  
                const weather = JSON.parse(data);  
                if (weather.main) {  
                    console.log(`Cuaca di ${city}:`);  
                    console.log(`Tanggal: ${new Date().toLocaleString('id-ID')}`);  
                    console.log(`Suhu: ${weather.main.temp}°C`);  
                    console.log(`Kelembaban: ${weather.main.humidity}%`);  
                    console.log(`Deskripsi: ${weather.weather[0].description}`);  
                } else {  
                    console.log(`Kota "${city}" tidak ditemukan.`);  
                }  
            } catch (err) {  
                console.log("Terjadi kesalahan saat memproses data cuaca:", err.message);  
            }  
        });  

    }).on("error", (err) => {  
        console.log("Error saat menghubungi API: " + err.message);  
    });  
}  

// Setup readline untuk mengambil input dari pengguna  
const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

// Tanyakan nama kota kepada pengguna  
rl.question('Masukkan nama kota: ', (city) => {  
    if (city) {  
        getWeather(city);  
    } else {  
        console.log("Nama kota tidak boleh kosong.");  
    }  
    rl.close();  
});
// output
//Masukkan nama kota: magelang
// Cuaca di magelang:
// Tanggal: 23/9/2024, 16.03.00
// Suhu: 26.53°C
// Kelembaban: 76%
// Deskripsi: broken clouds