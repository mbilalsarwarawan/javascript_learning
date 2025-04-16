# 📦 Node.js Express API - Excel File Upload & Download

A production-ready REST API built with Node.js, Express, and MongoDB that supports:

- ✅ Uploading Excel files and saving parsed data to MongoDB
- ✅ Downloading Excel files generated from stored MongoDB data

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (file upload)
- ExcelJS (Excel parsing/generation)
- dotenv, nodemon, and modern ES6+ structure

---

## 📁 Project Structure

```
src/
├── controllers/
│   └── excelController.js
├── models/
│   └── ExcelFile.js
├── routes/
│   └── excelRoutes.js
├── utils/
│   └── excelGenerator.js
├── middlewares/
│   └── errorHandler.js
├── app.js
└── server.js
```

---



2. Install dependencies:

```bash
npm install
```

3. Add your environment variables to `.env` file:

```
MONGO_URI=mongodb://localhost:27017/excel-api
PORT=5000
```

4. Start the development server:

```bash
npm run dev
```

---

## 📤 API Endpoints

### 1. Upload Excel File

**POST** `/api/excel/upload`

Uploads a `.xlsx` file, parses it, and saves the content to MongoDB.

#### Headers:

- `Content-Type: multipart/form-data`

#### Form Field:

- `file`: Excel file (.xlsx)

#### Sample Request (Postman):

- Method: `POST`
- URL: `http://localhost:5000/api/excel/upload`
- Body: form-data → key = `file`, type = `File`

#### Sample Response:

```json
{
  "success": true,
  "data": {
    "_id": "661e46aa3ac5f640e79a345b",
    "originalFileName": "test.xlsx",
    "uploadedAt": "2025-04-16T11:43:04.901Z"
  }
}
```

---

### 2. Download Excel File by ID

**GET** `/api/excel/download/:id`

Generates a downloadable Excel file from MongoDB data using the document ID.

#### Sample Request:

```http
GET /api/excel/download/661e46aa3ac5f640e79a345b
```

- Automatically sends a `.xlsx` file as a downloadable response.
- Temporary file is deleted after the response is sent.

---

## 📂 Excel Format

Your uploaded Excel file must include a header row and formatted tabular data like:

| Name   | Email             | Age |
|--------|-------------------|-----|
| Bilal  | bilal@email.com   | 25  |
| Abeera | abeera@email.com  | 24  |

---

## 🧪 Testing Guide

- Use Postman or Thunder Client
- Upload `.xlsx` → receive document ID
- Use that ID to download the file from database

---

## 🧼 Clean-up

- All Excel files are stored temporarily and deleted after the download response.

---

## 📃 License

MIT © 2025 Your Name