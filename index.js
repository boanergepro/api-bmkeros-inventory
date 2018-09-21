import express from 'express';
// import api from './routes';
import bodyParser from 'body-parser';
import config from './config';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('api runing');
});

app.listen(config.PORT, () => {
    console.log(`Api runing in http://localhost:${config.PORT}`);
});