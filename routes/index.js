import express from "express";
import { deleteProduct, getProductById, getProducts, saveProduct, updateProduct } from "../controllers/productController.js";

const router = express.Router();

// untuk menampilkan semua data (API)
router.get('/', getProducts);

// untuk lihat data berdasarkan id (API)
router.get('/:id', getProductById);

// untuk menambahkan data (API)
router.post('/', saveProduct);


// untuk edit data (API)
router.patch('/:id', updateProduct);

// untuk menghapus data (API)
router.delete('/:id', deleteProduct);

export default router;