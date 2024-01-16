import express from 'express';
import routerCards from './routers/cards.js';
// import DB from './models/cards-mongodb.js';
import config from './config.js';
// import cors from 'cors'
// await DB.connectDB();
// DB.connectDB();

const PORT = config.PORT;

const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
// , { extensions: ['html', 'htm'] }

app.use('/api/cards', routerCards);

const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}`));
server.on('error', error => console.log(`Se produjo un error al intentar iniciar el servidor Express: ${error.message}`));
