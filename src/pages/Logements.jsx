import { useParams, Navigate } from "react-router-dom"
import LogementsJson from '../../logements.json'
import './Logements.scss'
import StarRating from "../components/StarRating"
import Carousel from '../components/Carousel'
import { Collapse } from "../components/Collapse"


export function Logements () {

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

    const collapseDescription = [
        {
          title: "Description",
          content: logementCorrespondant.description,
        }
        ];

    const collapseEquipements = [
        {
          title: "Equipements",
          content:
            <ul>
                {logementCorrespondant.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                ))}
            </ul>
        },
      ];

      const collapse1 = collapseDescription.map((data, index) => (
        <Collapse key={index} title={data.title} content={data.content} />
      ));

      const collapse2 = collapseEquipements.map((data, index) => (
        <Collapse key={index} title={data.title} content={data.content} />
      ));

    return (
    <div>
        <div className='page_logement' key={logementCorrespondant.id}>
            <Carousel images={logementCorrespondant.pictures} />
            
            <section className="section-1">
                <div className="div-1">
                    <div className="title">
                        <h1>{logementCorrespondant.title}</h1>
                        <h2>{logementCorrespondant.location}</h2>
                    </div>
                    <div className="card_tags_logements">
                        {tags}
                    </div>
                </div>
           
                <div className="div-2">
                    <div className="host-info">
                        <h3 className="host-name"> {logementCorrespondant.host.name.split(' ').join('\n')}</h3>
                        <img className="host-photo" src={logementCorrespondant.host.picture} alt="photo hôte" />
                    </div>
                    <div>
                        <StarRating rating={logementCorrespondant.rating} />
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className='boite_logement1'>
                    {collapse1}
                </div>
                <div className='boite_logement2'>
                    {collapse2}
                </div>
            </section>
        </div>
    </div>
  );
}