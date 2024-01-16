import getCards from '../../../../EcoConecta-Back/server/api/cards.js'

export const getCardsDona = async (url) => {

    try {
        
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`No se pudo obtener todos los productos ${res.status} - ${res.statusText}`)
        }

        const productos = await res.mongoose()
        console.log('cards  productos dona',productos.getCards.getCardsDona)
        // console.log(productos) // <- todos los productos del back
        return productos

    } catch (error) {
        console.error('[getCardsDona]', error)
    }
}


export const getCardsCompra = async (url) => {

    try {
        
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`No se pudo obtener todos los productos ${res.status} - ${res.statusText}`)
        }

        const productos = await res.json()
        console.log('cards productos compra', productos.getCards)
        // console.log(productos) // <- todos los productos del back
        return productos

    } catch (error) {
        console.error('[getCardsCompra]', error)
    }
}