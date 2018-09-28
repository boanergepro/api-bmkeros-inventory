import express from 'express';
import auth from 'middlewares/auth';
import userCtrl from 'controllers/user';
const api = express.Router();

api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.singIn);

module.exports = api;