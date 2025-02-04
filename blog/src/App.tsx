import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import GlobalStyle from './styles/globalStyle'
import { ThemeContextProvider } from "./contexts/ThemeContext";

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  )
}
