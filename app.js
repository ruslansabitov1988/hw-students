const express = require('express');
const app = express();
const bodyParser = require ("body-parser")

const studentsRouter = require("./router/studentsRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/students", studentsRouter);

app.listen(3030)