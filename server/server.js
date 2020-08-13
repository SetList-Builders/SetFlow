const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// Add routes, both API and view
app.use(routes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve("./client/build")))
    app.get("*", function(req, res) {
        console.log(req.headers)
            res.sendFile(path.resolve("./client/build/index.html"))
        })
        //  app.use(express.static("client/build/index.html"))
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/setflow");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});