const express = require('express')

const userRouter = require("./routes/user.route");
const middleware = require("../middlewares/user.middleware");

const app = express();
app.use(express.json())

app.use('/users', userRouter);

app.listen(5000, () => {
    console.log('5000')
})



