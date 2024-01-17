import express from 'express';
import routerCards from './routers/cards.js';
// import DB from './models/cards-mongodb.js';
import config from './config.js';
import cors from 'cors'
// await DB.connectDB();
// DB.connectDB();

const PORT = config.PORT;

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Permite el envío de cookies
    optionsSuccessStatus: 204, // Configura el código de estado para las solicitudes OPTIONS preflight
    allowedHeaders: 'Content-Type,Authorization', // Especifica los encabezados permitidos
};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
// , { extensions: ['html', 'htm'] }

app.use('/api/cards', routerCards);

const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));
server.on('error', error => console.log(`Se produjo un error al intentar iniciar el servidor Express: ${error.message}`));
