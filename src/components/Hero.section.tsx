import Image from 'next/image'
import { useRouter } from 'next/router'
import PastilleImage from "@images/pastille.png"
import Input from '@codegouvfr/react-dsfr/Input'
import Button from '@codegouvfr/react-dsfr/Button'
import heroBackgroundImage from '@images/toulouse.png'

export const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="row justify-start hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${heroBackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="column fr-container">
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
            <Button onClick={() => router.push("https://rizomo-connect.numerique.gouv.fr/realms/rizomo/login-actions/authenticate?client_id=sso")}>
              Créer mon compte
            </Button>
          </div>
        </div>
      </div>
      <div className="pastille">
        <Image alt="La pastille" src={PastilleImage} />
      </div>
    </section>
  )
}