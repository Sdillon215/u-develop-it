const db = require('./db/connection');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// defualt response for any other request (Not Found) *must be last*
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});