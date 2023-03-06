const express = require("express");
const connectDB = require("./data/db");
const dotenv = require("dotenv").config();
const port = 5000;

//~~ Connexion à la DB
connectDB();

const app = express();

//~~ Middleware pour traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./router/post.routes"));

//~~ Lancer le serveur
app.listen(port, () => console.log("Le serveur est good" + port));
