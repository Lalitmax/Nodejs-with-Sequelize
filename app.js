const express = require('express');
const cors = require('cors');
const { router } = require('./routes/router');
const { dbConnection } = require('./config/dbConnect');
const { User } = require('./model/userModel')

const app = express();

// app.use(cors()) // allow for all origin
app.use(cors({
    origin:"http://localhost:3000" // only for that origin
}))

app.use(express.json()) // for parse json req
app.use('/', router)
app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
})
// User.sync()
User.sync({ force: true })
app.listen(3000, () => {
    console.log(`server listen : http://localhost:3000`)
    dbConnection();
})