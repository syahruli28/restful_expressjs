import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";
import cors from "cors";

const app = express();

// membuat koneksi dengan mongoose, jika nama db tidak ada maka otomatis akan membuat db baru
mongoose.connect("mongodb://localhost:27017/resftul_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 
const db = mongoose.connection;
db.on('error', (error)=>console.error(error)); // kalau gagal koneksi
db.once('open', ()=> console.log('Database Connected.')); // jika berhasil koneksi


app.use(cors()); // agar API dapat diakses dari luar domain
app.use(express.json()); // agar bisa menerima post dalam format json
// arahkan ke url/endpoint '/product'
app.use('/product', route);


// jalankan
app.listen('3000', () => console.log('Server running on http://localhost:3000'));