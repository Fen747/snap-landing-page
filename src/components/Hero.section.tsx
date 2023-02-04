import Image from 'next/image'
import ToolsImg from "@images/outils.png"
import Input from '@codegouvfr/react-dsfr/Input'
import Button from '@codegouvfr/react-dsfr/Button'
import heroBackgroundImage from '@images/louvre.jpg'

export const Hero = () => {
  return (
    <section className="row justify-start bg-center bg-cover" style={{ backgroundImage: `url(${heroBackgroundImage.src})` }}>
      <div className="column">
        <h1 className='white'>
          La pastille SNAP,
          <br />
          <q>Mes applications à portée de main !</q>
        </h1>
        <div className="row align-center">
          <Input
            className='mr-1 white'
            label="Courriel"

            // hintText="Texte de description"
            // state="default"
            // stateRelatedMessage="Text de validation / d'explication de l'erreur"
          />
          <div>
            <Button>
              Créer mon compte
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}