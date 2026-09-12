const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Contacts API',
    description: 'Contacts API for CSE 341'
  },
  host: 'localhost:3000', 
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles);