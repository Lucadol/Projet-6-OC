import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Logements } from "./pages/Logements/Logements"
import { Apropos } from "./pages/Apropos/Apropos"
import { Index } from "./pages/Index/Index"
import { PageError } from "./pages/PageError/PageError"
import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <PageError/>,
    children: [
      {
        path: '',
        element: <Index/>
      },
      {
        path: 'logements/:id',
        element: <Logements/>
      },
      {
        path: 'a-propos',
        element: <Apropos/>
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
