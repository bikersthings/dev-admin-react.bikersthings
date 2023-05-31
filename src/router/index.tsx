
import {
    createBrowserRouter,
} from "react-router-dom";

import Layout from "../components/layout/_layout";
import Dashboard from "../components/layout/_dashboard";

import ManageItem from "../pages/manage-item";
import Profile from "../pages/profile";
import Wishlist from "../pages/wishlist";
import IceBoxDashboard from "../pages/ice-box-dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <ManageItem />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },

            {
                path: "/ice-box-dashboard",
                element: <IceBoxDashboard />,
            },

        ],
    },
]);

export default router;