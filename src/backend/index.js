import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger.js';
import emailRoutes from './routes/emailRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: 'API corriendo correctamente 🚀'
  });
});

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/email', emailRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${PORT} 🚀`);
});

