// const PERSISTENCE_TYPES = {
//     // TYPE_MEMORY: 'MEMORY',
//     // TYPE_FILE: 'FILE',
//     TYPE_MONGODB: 'MONGODB',
// };

const TYPE_MONGODB = 'MONGODB';
const config = {
    PORT: 8080,
    // PERSISTENCE_TYPE: PERSISTENCE_TYPES.TYPE_MONGODB,
    PERSISTENCE_TYPE: TYPE_MONGODB,
    // MONGODB_CONNECTION_STR: 'mongodb://127.0.0.1/ecommerce',
    MONGODB_CONNECTION_STR: 'mongodb+srv://agustinapedernera97:4582775@cluster0.py2aimn.mongodb.net/ecoconecta?retryWrites=true&w=majority',
    MONGODB_CONNECTION_TIMEOUT: 2000,   // Valor bajo para TESTING
};

export {TYPE_MONGODB, config as default};





