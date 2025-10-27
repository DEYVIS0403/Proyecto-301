import { userService } from '../services/userServices.js';

export const userController = {
  // 🟢 Obtener todos los usuarios
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // 🟣 Obtener usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.getUserById(id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // 🟢 Crear usuario
  async createUser(req, res) {
    try {
      const { email, name } = req.body;

      if (!email || !name) {
        return res.status(400).json({
          success: false,
          message: 'Email y nombre son obligatorios',
        });
      }

      const newUser = await userService.createUser({ email, name });
      res.status(201).json({
        success: true,
        data: newUser,
        message: 'Usuario creado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // 🟠 Actualizar usuario
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const updatedUser = await userService.updateUser(id, updateData);

      res.status(200).json({
        success: true,
        data: updatedUser,
        message: 'Usuario actualizado correctamente',
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },

  // 🔴 Eliminar usuario
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const result = await userService.deleteUser(id);

      res.status(200).json(result);
    } catch (error) {
      if (error.message.includes('not found')) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado',
        });
      }
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};

