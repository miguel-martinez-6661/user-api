import { DataTypes } from 'sequelize';
import database from '../database/Connection';

const TABLE_NAME = 'user';

const User = database().define(TABLE_NAME, {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
