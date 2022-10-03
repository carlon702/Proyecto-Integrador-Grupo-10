//

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');

//
const mainRoutes = require("./routes/main.js");
const userRoutes = require("./routes/user.js");
const productsRoutes = require("./routes/products.js");

// view engine

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//

app.use("/", mainRoutes);

app.use("/products", productsRoutes);

app.use("/user", userRoutes);

app.listen(3050, () => {
  console.log("Marcelo esta con nosotros 👻 3050 ");
});

//

//

//
