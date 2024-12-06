const express = require('express');
const mongoose = require('mongoose');
const app = express();
const noteRoutes = require('./routes/noteRoutes');  // Import noteRoutes

// Middleware for parsing JSON requests
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notesjs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));


// Use the routes
app.use(noteRoutes);  // Use the noteRoutes in the app

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
