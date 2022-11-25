const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Actors';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
            tableName: 'actors',
            timestamps:false //si tiene create_at y Update_at
        };
        const Actor = sequelize.define(alias, cols, config);

        Actor.associate = function(models){
            Actor.belongsToMany(models.Movies, {
                as: "movies",
                through: "actor_movie",
                foreignKey:"actor_id",
                otherKey: "movie_id",
                timestamps:false
            });
        }

        return Actor;
}