// import express
const express = require('express');
// port and app designations
const PORT = process.env.PORT || 3001;
const app = express();
// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// test get route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

// default response for any other request(Not Found) catch all
app.use((req, res) => {
    res.status(404).end();
});

// starts server on port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});