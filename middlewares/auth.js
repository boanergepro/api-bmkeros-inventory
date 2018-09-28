import service from 'services';

const isAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    }

    const token = req.headers.authorization.split(" ")[1];

    service.decodeToken(token)
        .then(response => {
            req.user = response;
            next()
        })
        .catch(err => {
           res.status(err.status)
        });

};

module.exports = isAuth;