import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import FAQ from "./pages/FAQ.js"
import Main from './pages/Main'
import Moderator from "./pages/Moderator"
import Support from "./pages/Support"
import TourPage from "./pages/TourPage"
import Tours from "./pages/Tours"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MODERATOR_ROUTE, REGISTRATION_ROUTE,  MAIN_ROUTE, SUPPORT_ROUTE, FAQ_ROUTE, ONETOUR_ROUTE, TOURS_ROUTE} from "./utils/const"

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:BASKET_ROUTE,
        Component:Basket
    },
    {
        path:MODERATOR_ROUTE,
        Component:Moderator
    },
]

export const publicRoutes = [
    {
        path:MAIN_ROUTE,
        Component:Main
    },
    {
        path:SUPPORT_ROUTE,
        Component:Support
    },
    {
        path:FAQ_ROUTE,
        Component:FAQ
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:ONETOUR_ROUTE + '/:id',
        Component:TourPage
    },
    {
        path:TOURS_ROUTE,
        Component:Tours
    },
]