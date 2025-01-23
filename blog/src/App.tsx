import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { ThemeProvider } from 'styled-components'
import themes from './themes'
import GlobalStyle from './styles/globalStyle'

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
