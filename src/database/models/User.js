module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        remember_token: {
            type: dataTypes.STRING
        },
        rol: {
            type: dataTypes.INTEGER
        }

    };
    let config = {
        tableName: 'users',
        timestamps:false //si tiene create_at y Update_at
    };
    const User = sequelize.define(alias, cols, config);

    return User;
}