const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const app = express();

//Connect to database
connectDB();

//CORS
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

//Define Routes
app.use('/', require('./routes/api/redirect'));
app.use('/api/index', require('./routes/api/index'));
app.use('/api/url', require('./routes/api/url'));

//Define port
const PORT = process.env.PORT || 3000;

//Set static if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "frontend", "build")))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend" , "build", "index.html"));
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));