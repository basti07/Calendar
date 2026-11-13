const express = require('express');
const basicAuth = require('express-basic-auth');
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        const endung = path.extname(file.originalname).toLowerCase();
        cb(null, Date.now() + endung);
    }
});

const upload = multer({storage: storage});

app.use('/public', basicAuth({
    users: {'mira': 'passwd'},
    challenge: true,
    realm: 'Miras Kalender'
}));

app.use(express.json());
app.use(express.static("public"));

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/termine', (req, res) => {
    const termine = JSON.parse(fs.readFileSync("termine.json", "utf8"));
    res.json(termine);
});

app.post('/termine', upload.single("image"), (req, res) => {
    //const fromdata = new FormData();
    const {title, start, text} = req.body;
    const image = req.file ? "/uploads/" + req.file.filename : null;

    const termine = JSON.parse(fs.readFileSync("termine.json", "utf8"));
    const neu = {title, start, text, image};
    termine.push(neu);
    fs.writeFileSync("termine.json", JSON.stringify(termine, null, 2));
    res.status(201).json(neu);
});

