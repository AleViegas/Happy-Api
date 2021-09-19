import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/orphanagesController';
import tokenController from './controllers/tokenController'

// router do express
const routes = Router();
// uploader instanciado com as configurações
const upload = multer(uploadConfig);

// rotas
routes.post("/token" ,tokenController)
routes.get("/orphanages", orphanagesController.index)
routes.get("/orphanages/:id", orphanagesController.show)
routes.post("/orphanages", upload.array('images'), orphanagesController.create)

export default routes

