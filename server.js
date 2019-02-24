const express = require('express');
const path = require('path')
// server app
const tv = require('./routes/api/tv')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// use Routes
app.use('/api/tv', tv);

// if none of these api routes are being hit, look for index
// Server static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder to client/build
  app.use(express.static('client/build'));
    // any route gets hit here load the react html file in build
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));