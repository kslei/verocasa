import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import Main from './pages/Main.jsx';
import ProductPage from './pages/ProductPage.jsx';
import './styles/base/base.scss';

const router = createHashRouter ([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/product/:id",
        element: <ProductPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
