import dotenv from 'dotenv';
import { isEnvironmentLoaded } from './helpers/Environment';
import Server from './models/Server';

dotenv.config();

const isEnvReady = isEnvironmentLoaded();

if (isEnvReady) {
  const server = new Server();
  server.listen();
}
