import express, { Application } from 'express';
import strings from '../constants/strings';
import router from '../routes/user';
import cors from 'cors';
import db from '../database/Connection';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use('/api', router);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log(strings.database.connectionSuccess);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`${strings.serverPort} ${this.port}`);
    });
  }
}

export default Server;
