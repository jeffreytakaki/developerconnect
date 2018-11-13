const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const users = require('./routes/api/users.js')
const profile = require('./routes/api/profile.js')
const posts = require('./routes/api/posts.js')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// DB Config
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db,{useNewUrlParser: true})
	.then(() => console.log('mongoDB connect'))
	.catch(err => console.log(err))


app.get('/', (req, res) => res.send('hello, you'))

// Use Routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`))