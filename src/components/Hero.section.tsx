import { useRouter } from "next/router";
// import Input from '@codegouvfr/react-dsfr/Input'
import Button from "@codegouvfr/react-dsfr/Button";
// import heroBackgroundImage from '@images/louvre.jpg'
import heroBackgroundImage from "@images/dinum-min.jpg";
import FranceConnectButton from "./FranceConnectButton";

export const Hero = () => {

  return (
    <section
      className="row justify-start hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15)), url(${heroBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      >
        <div className="column full-width ninetyVH ">
          <div className="row justify-end">
            <button className="fr-btn">La pastille pour ma structure</button>
          </div>
          <div className="column fr-container justify full-height">
          <h1 className="white">
            La pastille SNAP,
            <br />
            <q>Mes applications à portée de main !</q>
          </h1>
          <h4 className="white fontNormal">La pastille SNAP vous attend en bas a droite...</h4>
          <div className="row align-center">
            {/* <Input
              className='mr-1 white'
              label="Courriel"
          
              // hintText="Texte de description"
              // state="default"
              // stateRelatedMessage="Text de validation / d'explication de l'erreur"
            /> */}
            <div className="mt-3">
            <FranceConnectButton />
              <a href="https://snap-auth.numerique.gouv.fr/auth/realms/rizomo/login-actions/authenticate?execution=a7cf741d-1660-4ebc-97de-24ce3e672253&client_id=sso&tab_id=IC-kdFXAM00">
                <p className="white">S'identifier avec son courriel</p>
              </a>
            </div>
          </div>
                </div>
        </div>
    </section>
  );
};
