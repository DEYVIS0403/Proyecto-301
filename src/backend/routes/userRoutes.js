import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         email:
 *           type: string
 *           example: 1604086@senati.pe
 *         name:
 *           type: string
 *           example: deyvis
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', userController.getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: deyvis@gmail.com
 *               name:
 *                 type: string
 *                 example: deyvis
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/user'
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/',userController.createUser);
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario existente
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: deyvis@gmail.com
 *               name:
 *                 type: string
 *                 example: deyvis
 *     responses:
 *       201:
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             $ref: '#/components/schemas/user'
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', userController.updateUser);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar usuario existente
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', userController.deleteUser);

 
// Rutas de 

//metodo para elimanr DELETE
//metodo para actualizar PUT
//meodo para motficar PATCH


export default router;

