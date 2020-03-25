const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express()

app.use(cors());

//body das requisições vem no formato json
app.use(express.json());

app.use(routes);

app.listen(3333);