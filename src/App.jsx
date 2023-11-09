import {RouterProvider, createBrowserRouter, Outlet, NavLink, useRouteError} from "react-router-dom"
import { Logements } from "./pages/Logements"
import { Apropos } from "./pages/Apropos"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'logements',
        element: <Logements/>
      },
      {
        path: 'a-propos',
        element: <Apropos/>
      }
    ]
  },
])

function PageError() {
  const error = useRouteError()
  console.log(error)
  return <>
  <h1>Une erreur est survenue</h1>
  </>
}

function Root () {
  return <>
  <header>
    <nav>
      <NavLink to ="/">Home</NavLink>
      <NavLink to ="/logements">Logements</NavLink>
      <NavLink to ="/a-propos">A propos</NavLink>
    </nav>
  </header>
  <div className="container my-3">
    <Outlet/>
  </div>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App
