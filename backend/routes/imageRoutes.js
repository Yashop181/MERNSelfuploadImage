const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const Image = require('../models/Image');

// Define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Init upload
const upload = multer({ storage: storage });

// POST route to upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }
    const { filename: name } = req.file;
    const filePath = `/uploads/${name}`; // Update path to reflect the correct URL
    const newImage = new Image({ name, path: filePath });
    await newImage.save();
    res.status(201).json({ message: 'Image uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
