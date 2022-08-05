const express = require('express');
const authRouter = require('./src/auth/auth.route');
const userRouter = require('./src/user/user.route');
const app = express();
const port = 3000;


app.use(express.json())


app.use(userRouter)
app.use(authRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});