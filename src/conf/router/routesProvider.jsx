import { Home } from "../../pages/Home";
import { About } from "../../pages/About";

export const routesProvider = {
    home: {
        path: "/",
        element: <Home />
    },

    about: {
        path: "/about",
        element: <About />
    }
}