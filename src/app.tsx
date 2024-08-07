import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'
import { CartContextProvider } from './contexts/cart-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
