import XLSX from 'xlsx';

export const parseExcelFile = (fileBuffer) => {
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  return sheetData;
};
