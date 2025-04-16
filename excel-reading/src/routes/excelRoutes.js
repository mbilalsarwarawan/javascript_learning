import express from 'express';
import { uploadExcel , downloadExcelById} from '../controllers/excelController.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadExcel);
router.get('/download/:id', downloadExcelById); // 👈 This is the route you want


export default router;
