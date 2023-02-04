import Image from 'next/image'
import { Card } from "@codegouvfr/react-dsfr/Card"
import ToolsImg from "@images/outils.png"
import Undraw1Image from '@images/mission_card_1.svg'
import Undraw2Image from '@images/mission_card_2.svg'
import Undraw3Image from '@images/mission_card_3.svg'

const text = "Suite logicielle d'outils interministériels : collaborer, communiquer, dématérialiser"

export const Mission = () => {
  return (
    <section className='white bg-blue'>
      <h3 className='white'>
        La mission
      </h3>
      <p className="mission-catchprase">
        Vous offrir un espace de travail <span className="yellow">simple</span> et <span className="yellow">personalisable</span>
      </p>
      <div className="row full-width justify">
        <div className="mission-card">
          <div className="mission-card-img">
            <Image src={Undraw1Image} alt="Plateforme d'application de l'état"/>
          </div>
          <div className="column">
            <h3>La plateforme d&apos;application de l&apos;état</h3>
            <p>Avec la pastille, les agents publics peuvent facilement intréger des applications à leur espace personnalisables.</p>
          </div>
        </div>
        <div className="mission-card">
          <div className="mission-card-img">
            <Image src={Undraw2Image} alt="Gestionnaire de liens web"/>
          </div>
          <div className="column">
            <h3>Un gestionnaire de liens web</h3>
            <p>Les agents publics peuvent gérer leurs liens web et les organiser pour les utiliser simplement !</p>
          </div>
        </div>
        <div className="mission-card">
          <div className="mission-card-img">
            <Image src={Undraw3Image} alt="Pastille qui vous accompagne"/>
          </div>
          <div className="column">
            <h3>Une pastille qui vous accompagne</h3>
            <p>La pastille est un bouton flottant présent sur les sites compatibles. Elle vous permet de revenir sur votre espace personnel en un clic</p>
          </div>
        </div>
      </div>
    </section>
  )
}