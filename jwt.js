import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const verifytoken = (req, res, next) => {
    try {
        let token = req.headers.autherization;
        token = token.split(" ")[1];
        jwt.verify(token, "qwertyui");
        next();
    } catch (error) {
        res.json({ message: "unautherized request" })
    }
}

app.get('/login', (req, res) => {
    let token = jwt.sign({ id: 1 }, "qwertyui");
    res.json({ token: token })
});

app.get('/hello', verifytoken, (req, res) => {
    res.json(" hello   ");
});

app.listen(4566, () => {
    console.log("Server Started");
})