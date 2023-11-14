import { NavLink } from 'react-router-dom'
import './PageError.scss'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function PageError() {
    return <>
      <Header/>
      <div className='Error404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas</p>
        <NavLink to='/' className="link">
          Retourner sur la page d&apos;accueil
        </NavLink>
      </div>
      <Footer/>
    </>
  }