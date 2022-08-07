const express = require('express');
const authRouter = require('./src/auth/auth.route');
const postRouter = require('./src/post/post.route');
const userRouter = require('./src/user/user.route');
const app = express();
const port = 3000;

//body parser
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

//router
app.use(userRouter)
app.use(authRouter)
app.use(postRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});