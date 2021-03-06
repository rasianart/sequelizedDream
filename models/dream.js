// Dependencies
// =============================================================

// This may be confusing but here DataTypes (capital) references the standard library
// var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    // Creates a "Dream" model that matches up with DB
    let Dream = sequelize.define("Dream", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            foreignKey: true
        },
        dream_name: {
            type: DataTypes.STRING
        },
        devoured: {
            type: DataTypes.BOOLEAN
        },
        date: {
            type: DataTypes.DATE
        },
        foreign_user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "DreamUser",
                key: "id"
            }
        }
    }, {
        timestamps: false
    });

    // Syncs with DB
    Dream.sync();

    return Dream;

    // Makes the Dream Model available for other files (will also create a table)
}
