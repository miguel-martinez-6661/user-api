import { DataTypes } from 'sequelize';
import db from '../database/Connection';

const TABLE_NAME = 'user';

const User = db.define(TABLE_NAME, {
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
