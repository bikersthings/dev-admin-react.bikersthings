
import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";

import Dashboard from "../components/layout/_dashboard";

import ManageItem from "../pages/manage-item/item-manage";
import CreateItem from "../pages/manage-item/item-create";

import Profile from "../pages/profile";
import Wishlist from "../pages/wishlist";
import IceBoxDashboard from "../pages/ice-box-dashboard";
import Login from "../pages/login";
import Brands from "../pages/coresys/brands";
import Category from "../pages/coresys/category";

const auth = () => {
    const state = localStorage.getItem('isLogin')
    if (state === 'true') return true
}

const isLoggedIn = auth()


const router = createBrowserRouter([
    {
        path: "/",
        element: isLoggedIn ? <Dashboard /> : <Navigate to='/login' />,
        children: [
            {
                path: "/",
                element: <ManageItem />,
            },
            {
                path: "/items/create",
                element: <CreateItem />,
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
            {
                path: "/brands",
                element: <Brands />,
            },
            {
                path: "/category",
                element: <Category />,
            },

        ],
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;