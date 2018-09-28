import Sequelize from 'sequelize';

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING
            },
            displayName: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        }, {
            tableName: 'user',
            sequelize
        })
    };
}

export { User };