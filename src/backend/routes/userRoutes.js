import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/',userController.updateUser);

//metodo para elimanr DELETE
//metodo para actualizar PUT
//meodo para motficar PATCH


export default router;
