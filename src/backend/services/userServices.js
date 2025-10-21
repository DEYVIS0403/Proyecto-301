import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userService = {
    // Crear usuarios
    async createUser(data) {
        try {
            const { email, name } = data;
            return await prisma.user.create({
                data: { email, name }
            });
        } catch (error) {
            // Fix: throw a new Error object instead of calling error as a function
            throw new Error('Error al crear usuario: ' + error.message);
        }
    },

    // Obtener usuarios
    async getAllUsers() {
        try {
            return await prisma.user.findMany();
        } catch (error) {
            // Fix: throw a new Error object instead of calling error as a function
            throw new Error('Error al obtener usuarios: ' + error.message);
        }
    },
    //Actualizar usuario
    async updateUsers(){
        try{
            return await prisma.user.findMany({
                where:{id:parseInt(id)},
                data: data
            });
        }catch(error){
              throw new Error('Error al actualizar el usuarios: ' + error.message);
        }
    }
};

