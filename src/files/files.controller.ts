// import * as express from 'express';

// interface File {
//     'File Name': string;
//     pdf: string;
//   }
   
// class FilesController {
//   public path = '/files';
//   public router = express.Router();
 
//   private posts: File[] = [
//     {
//         "File Name": "Hello World",
//         pdf: "32rop2m3fpmse"
//     }
//   ];
 
//   constructor() {
//     this.intializeRoutes();
//   }
 
//   public intializeRoutes() {
//     this.router.get(this.path, this.getAllFiles);
//     this.router.post(this.path, this.uploadAFile);
//   }
 
//   getAllFiles = (request: express.Request, res: express.Response) => {
//     res.send(this.posts);
//   }
 
//   uploadAFile = (req: express.Request, res: express.Response) => {
//     const post: File = req.body;
//     this.posts.push(post);
//     res.send(post);
//   }
// }
 
// export default FilesController;

import * as express from 'express';
import * as bodyParser from 'body-parser';

const filesController = (): express.Router => {
    const router = express.Router();

    router.get('/files', (req, res) => {
      // Retrieve all files from the database
      // ...
  
      res.status(200).send(res.json());
  });
    
  router.post('/files', (req, res) => {
    const file = req.body;
    if (!file) {
      res.status(400).send({ message: 'No file provided' });
      return;
    }
    // Save the file to the database
    // ...
  
    res.status(201).send({ message: 'File uploaded successfully' });
  });
    // Add routes for the router here

    return router;
};

export default filesController;