import bcrypt from 'bcrypt-nodejs';
import { User } from 'database/models';
import service from '../services'

const signUp = async (req, res) => {
    try {
        let hashPassword = await bcrypt.hashSync(req.body.password);

        let user = await User.create({
            email: req.body.email,
            displayName: req.body.displayName,
            password: hashPassword,
        });
        console.log(user);
        res.status(200).send({ token: service.createToken(user)});
    }
    catch (err) {
        res.status(500).send({ message: `Error al crear el usuario: ${err}` });
    }

};

const singIn = async (req, res) => {
    try {
        let user = await User.find({ email: req.body.email });
        if (!user) return res.status(404).send({ message: 'No existe el usuario' });

        req.user = user;
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
};

module.exports = {
    signUp,
    singIn,
};