import Product from "../models/Product.js";

// fungsi untuk menampilkan semua data dari model/db
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// fungsi untuk menampilkan satu data berdasarkan id dari model/db
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById({_id: req.params.id});
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// fungsi untuk menambahkan data ke model/db
export const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// fungsi untuk mengedit data berdasarkan id ke model/db
export const updateProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan."});
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(201).json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// fungsi untuk hapus data berdasarkan id ke model/db
export const deleteProduct = async (req, res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan."});
    try {
        const deletedProduct = await Product.deleteOne({_id: req.params.id});
        res.status(201).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}