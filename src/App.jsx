import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { Logements } from "./pages/Logements"
import { Apropos } from "./pages/Apropos"
import { Index } from "./pages/Index"
import { PageError } from "./pages/PageError"
import { Root } from "./utils/Root"
import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
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
