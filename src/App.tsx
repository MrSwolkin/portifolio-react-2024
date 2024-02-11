import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import { GlobalCss } from './styles'

import MainPage from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])

const App = () => (
  <>
    <GlobalCss />
    <Header />
    <RouterProvider router={rotas} />
    <Footer />
  </>
)

export default App
