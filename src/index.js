require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const morgan = require('morgan')

const todosRoutes = require("./routes/todos.routes")

const app = express();

// Parsing application/json
app.use(bodyParser.json())


// Logging
app.use(morgan("dev"));

// Allow Cross-Origin requests
app.use(cors());

// Setup Routes
app.use("/api/todos", todosRoutes)

// handle undefined Routes
app.use('*', (req, res) => {
    res.status(404).json({ error: "Not Found" })
});

// Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
app.use(
    (err, req, res, next) => {
        console.error(err.stack)
        res.status(500).json({ error: 'Something broke!' + err.stack })
    })

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});