const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/selffront');

app.use(express.json());
app.use(cors());
// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the image routes
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
