import { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import './Collapse.scss'

export function Collapse() {
  const [isWhiteBoxVisible, setWhiteBoxVisibility] = useState(false)

  const toggleWhiteBox = () => {
    setWhiteBoxVisibility(!isWhiteBoxVisible)
  }

  return (
    <article className='boite-collapse'>

      <div className='red_box' onClick={toggleWhiteBox}>
        <label htmlFor="description">
            <h3>Description</h3>
            <IoIosArrowUp className={`arrow-icon ${isWhiteBoxVisible ? 'rotate' : ''}`} />
        </label>
      </div>

      {isWhiteBoxVisible && (
        <div className={`white_box ${isWhiteBoxVisible ? 'open' : ''}`}>
          Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canal Saint Martin, vous serez proche des transports, mais également de nombreux commerces. Lappartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.
        </div>
      )}

    </article>
  )
}
