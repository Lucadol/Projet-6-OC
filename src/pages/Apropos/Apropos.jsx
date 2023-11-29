import fond from '../../assets/Apropos_fond_2.png'
import './Apropos.scss'
import { Collapse } from '../../components/Collapse/Collapse'

const collapseData = [
  {
    title: 'Fiabilité',
    content: <p>
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      </p>,
  },
  {
    title: 'Respect',
    content: <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
      </p>,
  },
  {
    title: 'Service',
    content: <p>
      Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N&apos;hésitez pas à nous contacter si vous avez la moindre question.
      </p>,
  },
  {
    title: 'Sécurité',
    content: <p>
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      </p>,
  },
]

export function Apropos () {

  return (
    <div className='Apropos'>
      <div className='fond'>
        <img className='paysage' src={fond} alt='photo paysage' />
      </div>
      <div className='boite'>
        {collapseData.map((data, index) => (
          <div key={index} className={`boite${index + 1}`}>
            <Collapse title={data.title} content={data.content} />
          </div>
        ))}
      </div>
    </div>
  )
}
