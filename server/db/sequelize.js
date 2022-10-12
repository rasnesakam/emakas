const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(`postgres://${USERNAME}:${PASSWD}@${HOST}:${PORT}/${DB_NAME}`);

export {sequelize}