import { useParams, Navigate } from "react-router-dom"
import LogementsJson from '../../logements.json'
import './Logements.scss'
import { IoIosArrowUp } from "react-icons/io"
import StarRating from "../components/StarRating"

export function Logements () {

    const carouselData = [
        "Description",
        "Equipements"
    ]

    const carousel = carouselData.map((text, index) => (
        <div key={index} className="card_carousel_logement">
          {text}
          <IoIosArrowUp className='arrow-icon'/>
        </div>
      ))

    const {id} = useParams()

    // Trouve le logement correspondant à l'ID dans le fichier JSON
    const logementCorrespondant = LogementsJson.find(logement => logement.id === id);

    //Si aucun logement correspond, redirige vers la page d'erreur
    if (!logementCorrespondant) {
        return <Navigate to='/PageError' />
    }

    const tagsData = logementCorrespondant.tags

    const tags = tagsData.map((text, index) => (
        <div key={index} className="card_tags">
            {text}
        </div>
    ))

    return (
    <div>
        <div className='page_logement' key={logementCorrespondant.id}>
            <img className="appartement" src={logementCorrespondant.cover} alt="Photo appartement" />
            <section className="section-1">
                <div className="title">
                    <h1>{logementCorrespondant.title}</h1>
                    <h2>{logementCorrespondant.location}</h2>
                </div>
                <div className="host-info">
                    <h2 className="host-name"> {logementCorrespondant.host.name.split(' ').join('\n')}</h2>
                    <img className="host-photo" src={logementCorrespondant.host.picture} alt="photo hôte" />
                </div>
            </section>

            <section className="section-2">
                <div className="card_tags_logements">
                    {tags}
                </div>
                
                <div>
                    <StarRating rating={logementCorrespondant.rating} />
                </div>
            </section>

            <div className='carousel_logement'>
                    {carousel}
                </div>
        </div>
    </div>
  );
}