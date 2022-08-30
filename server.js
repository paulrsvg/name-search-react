const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true
}, 
(err, client) => {
  if (err) {
    console.error(err)
    return
  }
  db = client.db("Users")
});

// Create a scheme for users: name, location
const userSchema = new mongoose.Schema({
  name: String,
  location: String,
});

// Create a model 
const User = mongoose.model('User', userSchema);

//crud rest api endpoints - only need to read data in this case

// read - grab the user data
app.get('/users', async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));