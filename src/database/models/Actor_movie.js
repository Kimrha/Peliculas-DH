const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        actor_id: {
            type: dataTypes.INTEGER
        },
        movie_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: 'actor_movie',
            timestamps:false //si tiene create_at y Update_at
        };
        const Actor_movie = sequelize.define(alias, cols, config);

        return Actor_movie;
}