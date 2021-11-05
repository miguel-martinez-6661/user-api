import express, { Application } from 'express';
import strings from '../constants/strings';
import router from '../routes/user';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.routes();
  }

  routes() {
    this.app.use('/api', router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`${strings.serverPort} ${this.port}`);
    });
  }
}

export default Server;
