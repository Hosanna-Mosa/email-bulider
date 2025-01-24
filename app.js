const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoute');
const path = require("path");
const cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"/public")));
app.set('view engine', 'ejs');
app.use(cookieParser());

// Routes
app.use('/', emailRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
