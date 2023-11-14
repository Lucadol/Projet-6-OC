import fond from '../assets/home_fond_2.png'
import './Index.scss'

const cards = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="card_logement"></div>
  ));

export function Index () {
    return (
        <>
            <div className='fond'>
                <h1 className='texte_paysage'>Chez vous, partout et ailleurs</h1>
                <img className="paysage" src={fond} alt="photo paysage" />
            </div>

            <div className='container'>
                <div className='container_logements'>
                    {cards}
                </div>
            </div>
        </>
    )
}
