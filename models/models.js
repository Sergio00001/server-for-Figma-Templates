const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Layout = sequelize.define('layout', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    difficulty: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
})

module.exports = {
    Layout,
}