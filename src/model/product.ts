import sequelize, { DataTypes, Model } from "./db";
const { STRING, INTEGER, DECIMAL, DATE } = DataTypes

class Product extends Model { }

Product.init(
    {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        name: {
            type: STRING,
            allowNull: false
        },
        cost: {
            type: DECIMAL,
            allowNull: false
        },
        creation_date: {
            type: DATE,
            allowNull: false
        }

    },
    {
        sequelize,
        modelName: 'Product',
        updatedAt: false,
        createdAt: "creation_date"
    },
);

export default Product