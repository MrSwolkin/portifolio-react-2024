import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import MainPage, { cartao } from './pages/Home'

import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
