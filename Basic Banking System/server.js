const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

// connecting to db
mongoose.connect(`mongodb+srv://Sethuram:Sethuram@cluster0.bn1ss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
})

// routes
const customerRoute = require("./routes/customer");
app.use('/customer', customerRoute);

app.use(express.static('./client'));

const port = process.env.PORT || 3000;

// port for heroku
app.listen(port, () => {console.log(`Server started at 3000`)})