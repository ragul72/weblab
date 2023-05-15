
//mongoose.connect('mongodb+srv://ragul2010444:Hades72485@cluster0.fvt5xz5.mongodb.net/newdatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  // Import required packages
// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Create Express app
const app = express();

// Configure body-parser to handle POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ragul2010444:Hades72485@cluster0.fvt5xz5.mongodb.net/newdatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });

// Define a User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const newUser = new User({
    username: username,
    password: password
  });

  newUser.save()
    .then(() => {
      res.status(200).json({ message: 'Signup successful!' });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

// Serve the AngularJS app
app.use(express.static(path.join(__dirname, '/public')));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
