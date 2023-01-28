// import * as express from 'express';
import * as bodyParser from 'body-parser';
// import FilesController from './files/files.controller';


  
// class App {
//   public app: express.Application;
//   public port: number;
 
//   constructor(controllers: FilesController[], port: number) {
//     this.app = express();
//     this.port = port;
 
//     this.initializeMiddlewares();
//     this.initializeControllers(controllers);
//   }
 
//   private initializeMiddlewares() {
//     this.app.use(bodyParser.json());
//   }
 
//   private initializeControllers(controllers) {
//     controllers.forEach((controller) => {
//       this.app.use('/', controller.router);
//     });
//   }
 
//   public listen() {
//     this.app.listen(this.port, () => {
//       console.log(`App listening on the port ${this.port}`);
//     });
//   }
// }
 
// export default App;


import * as express from 'express';
import filesController from './files/files.controller';

const createApp = ( port: number) => {
    const app = express();

    app.use('/files', filesController);
   

    const listen = () => {
        app.listen(port, () => {
            console.log(`App listening on the port ${port}`);
        });
    }

    return { app, listen };
};

export default createApp;