import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import PendingModel from './user.js';
import pdf from 'pdf-parse'
import fs from 'fs'

const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './files'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// // Register user
// router.post('/register', async (req, res) => {
//   try {
//     const { email, phone, date, select, name } = req.body;
//     console.log("Received data:", { email, phone, date, select, name });

//     const userCreated = await PendingModel.create({ email, phone, date, select, name });
//     console.log("User created:", userCreated);

//     res.status(200).json({
//       msg: "User registered successfully",
//       userId: userCreated._id.toString(),
//     });
//   } catch (error) {
//     console.error("Error in register route:", error.message);
//     res.status(500).json({ msg: "Internal Server Error" });
//   }
// });

// Health check route
router.get("/", (req, res) => {
  res.status(200).send("Server is running!");
});

router.post('/upload-pdf', upload.single('file'), async(req, res) => {
    try {
      if (!req.file) return res.status(400).json({ status: 'error', message: 'No file uploaded' });
      const filePath = path.resolve(req.file.path);
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdf(dataBuffer);
      const pageCount = data.numpages;
      res.status(200).json({status: 'ok', pdf: { fileUrl: req.file.filename }, pageCount});
    } catch (error) {
      console.error('PDF parsing error:', error);
      res.status(500).json({ error: 'Failed to read PDF' });
    }
});

// Get all PDFs
router.get("/get-pdf", async (req, res) => {
  try {
    const data = await PendingModel.find({});
    res.status(200).json({ status: "ok", data });
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

// Get a specific PDF by ID
router.get("/pdf/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ status: "error", message: "Invalid PDF ID format" });
  }

  try {
    const pdfDoc = await PendingModel.findById(id);

    if (!pdfDoc) {
      return res.status(404).json({ status: "error", message: "PDF not found" });
    }

    res.status(200).json({ status: "ok", pdf: pdfDoc.pdf });
  } catch (error) {
    console.error("Error fetching PDF:", error);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params;

  // Validate the userId before converting it
  if (!ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }

  try {
    const user = await PendingModel.findOne({ _id: new ObjectId(userId) });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Save user data with file upload
router.post("/save-user-data", upload.single("file"), async (req, res) => {
  const { name, email, phone, date, pdf, select } = req.body;
  console.log("Request Body:", req.body);
  console.log("File:", req.file);

  if (!name || !email || !phone || !date || !pdf?.fileUrl || !select) {
    return res.status(400).json({ status: "error", message: "All fields are required" });
  }

  try {
    const newUser = new PendingModel({ name, email, phone, date, pdf, select });
    await newUser.save();
    res.status(200).json({ status: "ok", message: "User data saved successfully" });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ status: "error", message: "Database error" });
  }
});

// Alternate registration endpoint
router.post("/Pending/reg", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    if (!req.body.pdf || !req.body.pdf.fileUrl) {
      return res.status(400).json({ status: "error", message: "File URL is missing" });
    }

    const newUser = new PendingModel(req.body);
    await newUser.save();

    res.status(200).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error("Error saving user data:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

export default router;