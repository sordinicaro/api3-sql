import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(
    'postgres://fmzqtmft:RjKnC7IweIkHAaqS-XaPqDFMXX8_4Klj@silly.db.elephantsql.com/fmzqtmft'
);

export default sequelize;
export { DataTypes, Model }
