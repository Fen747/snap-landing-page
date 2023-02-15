import Image from 'next/image'
import mission1Image from '@images/mission_1.svg'
import mission2Image from '@images/mission_2.svg'
import mission3Image from '@images/mission_3.svg'

export const Mission = () => {
  return (
    <section className='white bg-blue mission'>
      <div className="fr-container">
        <h3 className='white text-center'>
          La mission
        </h3>
        <h4 className="mission-catchphrase white text-center">
          Vous offrir un espace de travail <span className="yellow">simple</span> et <span className="yellow">personalisable</span>
        </h4>
        <div className="row m-column full-width justify">
          <div className="mission-card m-row">
            <div className="mission-card-img">
              <Image src={mission1Image} alt="Plateforme d'application de l'état"/>
            </div>
            <div className="column">
              <h3>La plateforme d&apos;applications de l&apos;État</h3>
              <p>Avec la pastille, les agents publics peuvent facilement intégrer des applications à leurs espaces personnalisables.</p>
            </div>
          </div>
          <div className="mission-card m-row">
            <div className="mission-card-img">
              <Image src={mission2Image} alt="Gestionnaire de liens web"/>
            </div>
            <div className="column">
              <h3>Un gestionnaire de liens web</h3>
              <p>Les agents publics peuvent gérer leurs liens web et les organiser pour les utiliser simplement !</p>
            </div>
          </div>
          <div className="mission-card m-row">
            <div className="mission-card-img">
              <Image src={mission3Image} alt="Pastille qui vous accompagne"/>
            </div>
            <div className="column">
              <h3>Une pastille qui vous accompagne</h3>
              <p>La pastille est un bouton flottant présent sur les sites compatibles. Elle vous permet de revenir sur votre espace personnel en un clic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}