import fond from '../assets/Apropos_fond_2.png'
import './Apropos.scss'
import { IoIosArrowUp } from "react-icons/io";


const carouselData = [
    "Fiabilité",
    "Respect",
    "Service",
    "Sécurité",
  ]
  
  const carousel = carouselData.map((text, index) => (
    <div key={index} className="card_carousel">
      {text}
      <IoIosArrowUp className='arrow-icon'/>
    </div>
  ))

export function Apropos () {
    return (
        <>
              <div className='fond'>
                <img className="paysage" src={fond} alt="photo paysage" />
            </div>
            <div className='carousel'>
                    {carousel}
                </div>
        </>
    )
}
