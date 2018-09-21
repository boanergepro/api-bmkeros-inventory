import Sequelize from 'sequelize';
import { Legend } from "./Legend";

class Invetory extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            legend_id: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.STRING
            },
            // Cantidad en total
            quantity: {
                type: Sequelize.INTEGER
            },
            // Cantidad disponible
            quantity_available: {
                type: Sequelize.INTEGER
            },
            observations: {
                type: Sequelize.STRING
            }
        }, {
            tableName: 'inventory',
            sequelize
        })
    };

    static associate(models) {
        this.belongsTo(models.Legend, { foreignKey: 'legend_id' });
    }
}

export { Invetory };