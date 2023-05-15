import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import Contact from "../../pages/Contact";
import Quote from "../../pages/Quote";
import Services from "../../pages/Services";

export const routesProvider = {
    home: {
        path: "/",
        element: <Home />
    },

    about: {
        path: "/about",
        element: <About />
    },
    contact: {
        path: "/contact",
        element: <Contact />
    },
    quote: {
        path: "/quote",
        element: <Quote/>
    },
    services: {
        path: "/services",
        element: <Services/>
    }
    
}