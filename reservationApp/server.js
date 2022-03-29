const express = require('express');
const cors = require("cors");
require('dotenv').config();

console.log("secret key is this", process.env.SECRET_KEY)
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())



require("./server/config/mongoose.config")
require("./server/routes/user.routes")(app)







app.listen(port, () => console.log(`Listening on port: ${port}`));