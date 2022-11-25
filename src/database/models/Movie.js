const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.DECIMAL
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
            tableName: 'movies',
            timestamps:false //si tiene create_at y Update_at
        };
        const Movie = sequelize.define(alias, cols, config);

        return Movie;
}
