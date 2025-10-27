import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Mi API REST_Proyecto_301",
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ajusta la ruta si está en otro lugar
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);

