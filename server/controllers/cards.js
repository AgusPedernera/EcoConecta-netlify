import api from '../api/cards.js';

const getCardsCompra = async (req, res) => {
    const cards = await api.getCardsCompra();
    res.json(cards);
};
const getCardsDona = async (req, res) => {
    const cards = await api.getCardsDona();
    res.json(cards);
};
const getCardsDonaRopa = async (req, res) => {
    const cards = await api.getCardsDonaRopa();
    res.json(cards);
};
const getCardsDonaAlimentos = async (req, res) => {
    const cards = await api.getCardsDonaAlimentos();
    res.json(cards);
};
const getCardsDonaUtiles = async (req, res) => {
    const cards = await api.getCardsDonaUtiles();
    res.json(cards);
};
const getCardsDonaJuguetes = async (req, res) => {
    const cards = await api.getCardsDonaJuguetes();
    res.json(cards);
};
const getCardsDonaMedicamentos = async (req, res) => {
    const cards = await api.getCardsDonaMedicamentos();
    res.json(cards);
};
const getCardsDonaLibros = async (req, res) => {
    const cards = await api.getCardsDonaLibros();
    res.json(cards);
};
const getCardsCompraRopa = async (req, res) => {
    const cards = await api.getCardsCompraRopa();
    res.json(cards);
};
const getCardsCompraJuguetes = async (req, res) => {
    const cards = await api.getCardsCompraJuguetes();
    res.json(cards);
};
const getCardsCompraDecoHogar = async (req, res) => {
    const cards = await api.getCardsCompraDecoHogar();
    res.json(cards);
};
const getCardsCompraFerias = async (req, res) => {
    const cards = await api.getCardsCompraFerias();
    res.json(cards);
};
const getCardsCompraProductos = async (req, res) => {
    const cards = await api.getCardsCompraProductos();
    res.json(cards);
};
const getCardsCompraLibros = async (req, res) => {
    const cards = await api.getCardsCompraLibros();
    res.json(cards);
};
const getCard = async (req, res) => {
    const id = req.params.id;
    
    const card = await api.getCard(id);
    res.json(card);
};

export default{
    getCardsCompra,
    getCardsDona,
    getCardsDonaAlimentos,
    getCardsDonaRopa,
    getCardsDonaUtiles,
    getCardsDonaJuguetes,
    getCardsDonaLibros,
    getCardsDonaMedicamentos,
    getCardsCompraDecoHogar,
    getCardsCompraFerias,
    getCardsCompraLibros,
    getCardsCompraRopa,
    getCardsCompraProductos,
    getCardsCompraJuguetes,
    getCard
}