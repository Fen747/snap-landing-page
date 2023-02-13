import { useRouter } from 'next/router'
import Button from "@codegouvfr/react-dsfr/Button";
import Input from "@codegouvfr/react-dsfr/Input";
import Alert from "@codegouvfr/react-dsfr/Alert";

const successUrl = `${(typeof window === "undefined") ? "" : window.location.href.split('?')[0]}?success=true`

const Feedback = () => {
  const router = useRouter();

  return  (
    <section className="fr-container">
      {!!router.query.success ? (
        <>
          <Alert
            description="Nous avons bien reçu votre retour."
            severity="success"
            title="Merci pour votre participation !"
            className='full-width mb-3'
          />
          <br />
          <div>
            <Button onClick={() => {
              router.replace("/")
            }}>
              Retourner à la page d&apos;accueil
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1>Dites nous ce que vous pensez de la pastille SNAP</h1>
          <p>
            L&apos;objectif de ce questionnaire mis en place par la DINUM est de recueillir le retour d&apos;expérience des utilisateurs lors de votre utilisation de La Pastille SNAP
          </p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="4b59719a-9952-4ff8-83dd-bf22cf500532" />
            <input type="hidden" name="redirect" value={successUrl} />
            <Input
              nativeTextAreaProps={{
                name: "how_to_improve"
              }}
              label="Comment pouvons nous améliorer l'expérience globale de La Pastille ?"
              textArea
            />
            <Input
              nativeInputProps={{
                name: "email",
                defaultValue: router.query.email || "",
                type: "email",
              }}
              label="Si vous acceptez, vous pouvez nous laisser votre courriel pour nous permettre de vous contacter si besoin"
            />
            <p>
              👋 Nous vous remercions d&apos;avoir pris le temps de répondre à ce questionnaire.
            </p>
            <Button type="submit">
              Envoyer
            </Button>
          </form>
        </>
      )}
    </section>
  )
};

export default Feedback;