import jwt from 'jwt-simple';
import moment from 'moment';
import config from 'config';

const createToken = (user) => {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.SECRET_TOKEN);
};

const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                })
            }
            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: 'Token invalido'
            })
        }
    });
};

module.exports = {
    createToken,
    decodeToken,
};