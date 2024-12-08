import './App.css'
import Layout from "./Layout.jsx";
import Admin from "./pages/admin-page/pages/Admin.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Map from "./pages/admin-page/components/Map.jsx";
import UserInfo from "./pages/admin-page/components/UserInfo.jsx";
import ProductList from "./pages/admin-page/components/ProductList.jsx";

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
                        element: <ProductList/>
                    },
                    {
                        path: '/user-info/:id',
                        element: <ProductList/> // user info detail pageni yozasan shu yergas
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
