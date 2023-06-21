const express = require("express")
const app = express()
const flash = require("express-flash")
const cookieParser = require("cookie-parser")
const routes = require("./Routes")

require("dotenv").config();
app.use(express. urlencoded({extended:true}))
app.use(express.json())
app.use(flash())

app.get("/", (req, res) => {
    res.json({message:"api running!"})
});

app.use("/", routes)

app.listen(process.env.PORT, () => {
    console.log(`server connected http://localhost:${process.env.PORT}`);
})