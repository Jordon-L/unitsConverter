const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));