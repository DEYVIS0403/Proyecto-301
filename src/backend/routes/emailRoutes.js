import express from "express";
import { registerUser }from "../controllers/emailControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/email:
 *   post:
 *     summary: Registrar usuario y enviar email
 *     tags:
 *       - Email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: macadeyvis@gmail.com
 *               name:
 *                 type: string
 *                 example: Deyvis
 *     responses:
 *       200:
 *         description: Email enviado correctamente
 *       500:
 *         description: Error del servidor al enviar email
 */
router.post('/', registerUser);


router.post("/register",registerUser);

export default router;