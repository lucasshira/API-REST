import express from 'express'; // sucrase permite usar import/exports no Node
import homeRoutes from './src/routes/homeRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
