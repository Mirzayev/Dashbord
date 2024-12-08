import './App.css'
import Layout from "./Layout.jsx";
import Admin from "./pages/admin-page/pages/Admin.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Map from "./pages/admin-page/components/Map.jsx";
import UserInfo from "./pages/admin-page/components/UserInfo.jsx";
import Purchaseroduct from "./pages/admin-page/components/Purchaseroduct.jsx";

function App() {

    const route = createBrowserRouter(
        [
            {
                path: '/',
                element: <Admin/>,
                children: [
                    {
                       index: true,
                        element: <Map/>
                    },
                    {
                        path: '/user-info',
                        element: <UserInfo/>,
                    },
                    {
                        path: '/product-list',
                        element: <Purchaseroduct/>
                    },
                    {
                        path: '/user-info/:id',
                        element: <Purchaseroduct/> // user info detail pageni yozasan shu yergas
                    },
                ]
            }
        ]
    )

    return (
        <RouterProvider router={route}>
        </RouterProvider>
    )
}

export default App
