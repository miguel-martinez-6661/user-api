import { Sequelize } from 'sequelize';
import strings from '../constants/strings';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const DB_DIALECT = 'mysql';

const database = () => {
  if (!DB_NAME || !DB_USER || !DB_PASS || !DB_HOST) {
    throw new Error(strings.database.credentialMissed);
  } else
    return new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      host: DB_HOST,
      dialect: DB_DIALECT,
    });
};

export default database;
