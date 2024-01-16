import config from '../config.js';
import Model from '../models/cards.js';

const model = Model.get(config.PERSISTENCE_TYPE);

const getCardsDona = async () => await model.readCardsDona();
const getCardsCompra = async () => await model.readCardsCompra();
const getCardsDonaRopa = async () => await model.readCardsDonaRopa();
const getCardsDonaAlimentos = async () => await model.readCardsDonaAlimentos();
const getCardsDonaUtiles = async () => await model.readCardsDonaUtiles();
const getCardsDonaJuguetes = async () => await model.readCardsDonaJuguetes();
const getCardsDonaMedicamentos = async () => await model.readCardsDonaMedicamentos();
const getCardsDonaLibros = async () => await model.readCardsDonaLibros();
const getCardsCompraRopa = async () => await model.readCardsCompraRopa();
const getCardsCompraJuguetes = async () => await model.readCardsCompraJuguetes();
const getCardsCompraFerias = async () => await model.readCardsCompraFerias();
const getCardsCompraLibros = async () => await model.readCardsCompraLibros();
const getCardsCompraProductos = async () => await model.readCardsCompraProductos();
const getCardsCompraDecoHogar = async () => await model.readCardsCompraDecoHogar();
// const getCardsCompra = async () => await.model.readCardsCompra();
// const getCardsCompra = async () => await.model.readCardsCompra();

const getCard = async (id) => {
    const card = await model.readCard(id);
    return card;

};

export default{
    getCardsDona,
    getCardsDonaRopa,
    getCardsDonaAlimentos,
    getCardsDonaUtiles,
    getCardsDonaJuguetes,
    getCardsDonaMedicamentos,
    getCardsDonaLibros,
    getCardsCompra,
    getCardsCompraRopa,
    getCardsCompraJuguetes,
    getCardsCompraFerias,
    getCardsCompraLibros,
    getCardsCompraProductos,
    getCardsCompraDecoHogar,
    getCard
}
