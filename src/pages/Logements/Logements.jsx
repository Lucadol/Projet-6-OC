import PropTypes from 'prop-types'
import { useParams, Navigate } from 'react-router-dom'
import LogementsJson from '../../../logements.json'
import './Logements.scss'
import StarRating from '../../components/StarRating/StarRating'
import Carousel from '../../components/Carousel/Carousel'
import { Collapse } from '../../components/Collapse/Collapse'

const LogementSection = ({ title, content }) => (
  <div className={`boite_logement_${title}`}>
    <Collapse title={title} content={content} />
  </div>
);

LogementSection.propTypes = {
    title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  }

export function Logements () {
  const { id } = useParams();

  const logementCorrespondant = LogementsJson.find(logement => logement.id === id);

  if (!logementCorrespondant) {
    return <Navigate to='/PageError' />
  }

  const tagsData = logementCorrespondant.tags;
  const tags = tagsData.map((text, index) => <div key={index} className='card_tags'>{text}</div>);

  const collapseDescription = [
    {
      title: 'Description',
      content: <p>
        {logementCorrespondant.description}
        </p>,
    },
  ]

  const collapseEquipements = [
    {
      title: 'Equipements',
      content: (
        <ul>
          {logementCorrespondant.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div>
      <div className='page_logement' key={logementCorrespondant.id}>
        <Carousel images={logementCorrespondant.pictures} />

        <section className='section-1'>
          <div className='div-1'>
            <div className='title'>
              <h1>{logementCorrespondant.title}</h1>
              <h2>{logementCorrespondant.location}</h2>
            </div>
            <div className='card_tags_logements'>{tags}</div>
          </div>

          <div className='div-2'>
            <div className='host-info'>
              <h3 className='host-name'> {logementCorrespondant.host.name.split(' ').join('\n')}</h3>
              <img className='host-photo' src={logementCorrespondant.host.picture} alt='photo hôte' />
            </div>
            <div>
              <StarRating rating={logementCorrespondant.rating} />
            </div>
          </div>
        </section>

        <section className='section-2'>
          {collapseDescription.map((data, index) => (
            <LogementSection key={index} title={data.title} content={data.content} />
          ))}
          {collapseEquipements.map((data, index) => (
            <LogementSection key={index} title={data.title} content={data.content} />
          ))}
        </section>
      </div>
    </div>
  );
}
