import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Compra from "../pages/Compra"
import Dona from "../pages/Dona"
import Nosotros from "../pages/Nosotros"
import CardsDonaRopa from "../pages/CardsDonaRopa"
import CardsCompraCosmetica from "../pages/CardsCompraCosmetica"
import CardsCompraRopa from "../pages/CardsCompraRopa"
import CardsCompraLibro from "../pages/CardsCompraLibro"
import CardsCompraJuguete from "../pages/CardsCompraJuguete"
import CardsCompraDecoHogar from "../pages/CardsCompraDecoHogar"
import CardsCompraFeria from "../pages/CardsCompraFeria"
import CardsDonaAlimento from "../pages/CardsDonaAlimentos"
import CardsDonaLibros from "../pages/CardsDonaLibros"
import CardsDonaJuguetes from "../pages/CardsDonaJuguetes"
import CardsDonaUtiles from "../pages/CardsDonaUtiles"
import CardsDonaMedicamento from "../pages/CardsDonaMedicamento"

const Rutas = () => {

    const rutas = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/compra',
                element: <Compra />
            },
            {
                path: '/dona',
                element: <Dona />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/dona/ropa',
                element: <CardsDonaRopa />
            },
            {
                path: '/dona/alimentos',
                element: <CardsDonaAlimento />
            },
            {
                path: '/dona/libros',
                element: <CardsDonaLibros />
            },
            {
                path: '/dona/juguetes',
                element: <CardsDonaJuguetes />
            },
            {
                path: '/dona/utiles',
                element: <CardsDonaUtiles />
            },
            {
                path: '/dona/medicamentos',
                element: <CardsDonaMedicamento />
            },
            // {
            //     path: '/compra/:categoria',
            //     element: <Inicio />
            // },
            // {
            //     path: '/compra/:categoria/:id',
            //     element: <Inicio />
            // },
            // {
            //     path: '/dona/:categoria/:id',
            //     element: <Inicio />
            // }
            {
                path: '/compra/cosmetica',
                element: <CardsCompraCosmetica />
            },
            {
                path: '/compra/ropa',
                element: <CardsCompraRopa />
            },
            {
                path: '/compra/libros',
                element: <CardsCompraLibro />
            },
            {
                path: '/compra/juguetes',
                element: <CardsCompraJuguete />
            },
            {
                path: '/compra/decoHogar',
                element: <CardsCompraDecoHogar />
            },
            {
                path: '/compra/ferias',
                element: <CardsCompraFeria />
            },
        ]

    )

    return rutas
}

export default Rutas