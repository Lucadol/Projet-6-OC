import fond from '../assets/home_fond_2.png'
import './Index.scss'
import LogementsJson from '../../logements.json'

export function Index () {

    // Trouve le logement correspondant à l'ID dans le fichier JSON
    const logements = LogementsJson;

    const cards = logements.map((logement) => (
        <a key={logement.id} href={`/logements/${logement.id}`} className="card_logement">
            <div className='card_inner'>
                <img src={logement.cover} alt="{logement.title}" className='card_image' />
                <div className='card_overlay'></div>
                <div className='card_title'>{logement.title}</div>
            </div>
        </a>
      ))

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
