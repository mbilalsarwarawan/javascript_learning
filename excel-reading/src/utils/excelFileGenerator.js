import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

export const generateExcelFile = async (data, fileName = 'output.xlsx') => {
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Input data must be a non-empty array of objects.');
    }
  
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
  
    // Set up the header using object keys
    const columns = Object.keys(data[0]).map((key) => ({
      header: key,
      key,
      width: 25,
    }));
    worksheet.columns = columns;
  
    // Add the rows
    data.forEach((row) => {
      worksheet.addRow(row);
    });
  
    // Ensure uploads folder exists
    const uploadsDir = path.join('temp');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
  
    const filePath = path.join(uploadsDir, fileName);
  
    // Write to file
    await workbook.xlsx.writeFile(filePath);
  
    return filePath;
  };