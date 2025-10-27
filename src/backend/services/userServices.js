import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
  // 🟢 Crear usuario
  async createUser(data) {
    try {
      const { email, name } = data;
      return await prisma.user.create({
        data: { email, name },
      });
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  },

  // 🔵 Obtener todos los usuarios
  async getUsers() {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error('Error al obtener usuarios: ' + error.message);
    }
  },

  // 🟣 Obtener un usuario por ID
  async getUserById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      return user;
    } catch (error) {
      throw new Error('Error al obtener el usuario: ' + error.message);
    }
  },

  // 🟠 Actualizar usuario
  async updateUser(id, data) {
    try {
      return await prisma.user.update({
        where: { id: Number(id) },
        data,
      });
    } catch (error) {
      throw new Error('Error al actualizar el usuario: ' + error.message);
    }
  },

  // 🔴 Eliminar usuario
  async deleteUser(id) {
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      return { success: true, message: 'Usuario eliminado correctamente' };
    } catch (error) {
      throw new Error('Error al eliminar el usuario: ' + error.message);
    }
  },
};

