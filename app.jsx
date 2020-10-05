const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const User = require("./models/User");

const bodyParser = require('body-parser');
const passport = require('passport');



mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false })); //allows postman
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   //console.log(res) 
//   // const user = new User({
//   //   handle: 'bobo',
//   //   email: 'aasdfasd@google.com',
//   //   password: 'asdfjkl'
//   // })
//   // user.save()
//   res.send("Hello WWWWasdfsdaorld")});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

