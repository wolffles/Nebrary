const express = require('express');
const tv = require('./routes/api/tv')

// server app
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// use Routes
app.use('/api/tv', tv);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));