import express from 'express';
import { _connect } from './db/_connection.js';

_connect();
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listen on PORT ${PORT}`);
});


