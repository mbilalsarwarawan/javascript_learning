import ExcelData from '../models/Excel.js';
import { parseExcelFile } from '../utils/excelParser.js';
import asyncHandler from 'express-async-handler';
import fs from 'fs';
import { generateExcelFile } from '../utils/excelFileGenerator.js';


export const uploadExcel = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const parsedData = parseExcelFile(req.file.buffer);
  console.log('Parsed Data:', parsedData);
  const saved = await ExcelData.create({
    data: parsedData,
    originalFileName: req.file.originalname
  });

  res.status(201).json({
    message: 'File uploaded and data saved',
    savedId: saved._id
  });
});


export const downloadExcelById = asyncHandler(async (req, res) => {
  const fileRecord = await ExcelData.findById(req.params.id);
  if (!fileRecord) {
    return res.status(404).json({ message: 'File not found' });
  }

  const filePath = await generateExcelFile(fileRecord.data, fileRecord.originalFileName);

  res.download(filePath, (err) => {
    if (err) {
      console.error('Download error:', err);
    }
    fs.unlink(filePath, () => {}); // Delete after download
  });
});