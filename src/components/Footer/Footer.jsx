import footer from '../../assets/logo_blanc.png'
import './Footer.scss'

export function Footer () {
    return (
        <div className='footer'>
            <img src={footer} alt="logo kasa blanc" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}