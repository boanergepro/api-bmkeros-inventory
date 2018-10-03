import express from 'express';
import auth from 'middlewares/auth';
import userCtrl from 'controllers/user';
import { User } from 'database/models';
const api = express.Router();

api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.singIn);
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' });
});
api.get('/users', async (req, res) => {
  let users = await User.findAll();
  res.send({ users: users });
});

module.exports = api;
