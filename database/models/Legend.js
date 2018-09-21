import Sequelize from 'sequelize';

class Legend extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            code: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            }
        }, {
            tableName: 'legend',
            sequelize
        })
    };

    static associate(models) {
    }
}

export { Legend };