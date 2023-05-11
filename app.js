const express = require('express');
const path = require('path');

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public'), { maxAge: 86400000 }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
