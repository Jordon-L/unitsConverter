const express = require('express');
const lengthController = require('./controllers/lengthController');
const weightController = require('./controllers/weightController');
const volumeController = require('./controllers/volumeController');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/length', (req, res) => {
    lengthController.conversion(req, res);
});

app.get('/weight', (req, res) => {
    weightController.conversion(req, res);
});

app.get('/volume', (req, res) => {
    volumeController.conversion(req, res);
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));