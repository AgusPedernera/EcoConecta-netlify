import config from '../../config.js';
import mongoose from 'mongoose';

class MongoDB {
    
    // static READY_STATE_DISCONNECTED = 0;
    static READY_STATE_CONNECTED = 1;
    // static READY_STATE_CONNECTING = 2;
    // static READY_STATE_DISCONNECTING = 3;
    
    static connected = false;

    static async connectDB () {
        try {
            if (mongoose.connection.readyState === MongoDB.READY_STATE_CONNECTED) {
                // console.log('Ya conectado!');
                return true;
            }
            await mongoose.connect(config.MONGODB_CONNECTION_STR, {
                serverSelectionTimeoutMS: config.MONGODB_CONNECTION_TIMEOUT
            });
            console.log('Conexión con MongoDB exitosa');
            MongoDB.connected = true;
            return true;
        } catch (error) {
            console.error(`Se produjo un error al intentar establecer la conexión con MongoDB: ${error.message}`);
            return false;
        }
    };

}

export default MongoDB;

// import config from '../../config.js';
// import mongoose from 'mongoose';

// class MongoDB {
    
//     // static READY_STATE_DISCONNECTED = 0;
//     static READY_STATE_CONNECTED = 1;
//     // static READY_STATE_CONNECTING = 2;
//     // static READY_STATE_DISCONNECTING = 3;
    
//     static connected = false;

//     static async connectDB () {
//         try {
           
//             if (MongoDB.connected) {
//                 // Ya conectado
//                 await MongoDB.connectDB();
//                 return true;
//             }

//             if (mongoose.connection.readyState === MongoDB.READY_STATE_CONNECTED) {
//                 console.log('Ya conectado!');
//                 MongoDB.connected = true;
//                 return true;
//             }

//             await mongoose.connect(config.MONGODB_CONNECTION_STR, {
//                 serverSelectionTimeoutMS: config.MONGODB_CONNECTION_TIMEOUT
//             });
//             console.log('Conexión con MongoDB exitosa');
//             await MongoDB.connectDB();
//             MongoDB.connected = true;
//             return true;
//         } catch (error) {
//             console.error(`Se produjo un error al intentar establecer la conexión con MongoDB: ${error.message}`);
//             return false;
//         }
//     };
// };
// export default MongoDB
