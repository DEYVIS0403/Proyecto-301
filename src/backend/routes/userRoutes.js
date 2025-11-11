import express from "express";
import { userControllers } from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: magenta@gmail.com
 *        name:
 *          type: string
 *          example: magenta
 */

router.get("/", userControllers.getUsers);

router.post("/", userControllers.createUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

export default router;
