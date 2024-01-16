
import config, { TYPE_MONGODB } from '../config.js';
// import ProductModelMem from './products-mem.js';
// import ProductModelFS from './products-fs.js';
import MongoDB from '../services/DB/MongoDB.js';
import CardModelMongoDB from './cards-mongodb.js';

class CardModel {
    static get(type) {
        console.log(`##### Persistencia -> ${config.PERSISTENCE_TYPE} #####`);
        if (type === TYPE_MONGODB) {
            MongoDB.connectDB();
            return new CardModelMongoDB()
        }



        // switch (type) {
        //     case PERSISTENCE_TYPES.TYPE_MEMORY:
        //         return new ProductModelMem();
        //     case PERSISTENCE_TYPES.TYPE_FILE:
        //         return new ProductModelFS();
        //     case PERSISTENCE_TYPES.TYPE_MONGODB:
        //         MongoDB.connectDB();
        //         return new CardModelMongoDB();
        //     default:
        //         return new ProductModelMem();
        // }
    }
}

export default CardModel;
