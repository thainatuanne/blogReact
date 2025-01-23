import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/',
        element: <h1>Sobre</h1>,
    },
])
