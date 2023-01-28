// import App from './app';
// import FilesController from './files/files.controller';

 
// const app = new App(
//   [
//     new FilesController(),
//   ],
//   5000,
// );

// app.listen()

import createApp from './app';
import filesController from './files/files.controller';

const { app, listen } = createApp([filesController()], 5000);
listen();