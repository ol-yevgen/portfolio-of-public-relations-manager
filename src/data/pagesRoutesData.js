import Home from "../pages/Home/Home"
import About from "../pages/About/About";
import MyProjects from "../pages/MyProjects/MyProjects";
import Contacts from "../pages/Contacts/Contacts";
import { createRef } from "react";

const routes = [
    {
        path: '/',
        name: 'Home',
        element: <Home />,
        nodeRef: createRef()
    },
    {
        path: '/about',
        name: 'About',
        element: <About />,
        nodeRef: createRef(),
    },
    {
        path: '/portfolio',
        name: 'Projects',
        element: <MyProjects />,
        nodeRef: createRef()
    },
    {
        path: '/contacts',
        name: 'Contacts',
        element: <Contacts />,
        nodeRef: createRef()
    }
]

export default routes;