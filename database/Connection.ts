import { Sequelize } from 'sequelize';

const DB_DIALECT = 'mysql';

const database = () => {
  const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
  return new Sequelize(DB_NAME || 'user', DB_USER || 'root', DB_PASS || '', {
    host: DB_HOST || 'localhost',
    dialect: DB_DIALECT,
  });
};

export default database;
