import { useEffect } from 'react';
import fond from '../assets/Apropos_fond_2.png'
import './Apropos.scss'
import { IoIosArrowUp } from "react-icons/io";


const boiteData = [
    "Fiabilité",
    "Respect",
    "Service",
    "Sécurité",
  ]

export function Apropos () {

  useEffect(() => {
    const arrowElement = document.querySelector('.arrow-icon')

      arrowElement.addEventListener('click', () => {
        <div className='carousel_collapse'>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
          </p>
        </div>
      })
    }
  ,[])


  const boite = boiteData.map((text, index) => (
    <div key={index} className="card_boite">
      {text}
      <IoIosArrowUp className='arrow-icon'/>
    </div>
  ))

    return (
        <>
              <div className='fond'>
                <img className="paysage" src={fond} alt="photo paysage" />
            </div>
            <div className='boite'>
                    {boite}
                </div>
        </>
    )
}
