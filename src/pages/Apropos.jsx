import fond from '../assets/Apropos_fond_2.png'
import './Apropos.scss'
import { Collapse } from "../components/Collapse"

const dataFiabilite = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    }
];

const dataRespect = [
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    }
];

const dataService = [
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    }
];

const dataSecurite = [
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
];

const collapseFiabilite = dataFiabilite.map((data, index) => (
    <Collapse key={index} title={data.title} content={data.content} />
));

const collapseRespect = dataRespect.map((data, index) => (
    <Collapse key={index} title={data.title} content={data.content} />
));

const collapseService = dataService.map((data, index) => (
    <Collapse key={index} title={data.title} content={data.content} />
));

const collapseSecurite = dataSecurite.map((data, index) => (
    <Collapse key={index} title={data.title} content={data.content} />
));

export function Apropos () {

    return (
        <div className='Apropos'>
          <div className='fond'>
            <img className="paysage" src={fond} alt="photo paysage" />
          </div>
            <div className='boite'>
              <div className='boite1'>
                {collapseFiabilite}
              </div>
             <div className='botite2'>
              {collapseRespect}
             </div>
             <div className='botite3'>
             {collapseService}
             </div>
             <div className='botite4'>
             {collapseSecurite}
             </div>                    
          </div>
        </div>
    )
}
