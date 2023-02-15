import Image from 'next/image'
import CaroleAvatar from "@images/carole_dreal.jpg"
import MarcAvatar from "@images/marc.png"

export const Testimonials = () => {
  return (
    <section className="bg-light-blue white">
      <div className="fr-container row m-column">
        <div className="column justify mb-1">
          <q className="text-center testimonial-text">
            J&apos;apprécie de retrouver en un seul lieu l&apos;intégralité de mes outils de travail parfaitement rangés. La multiplication des outils de travail n&apos;est plus un souci.
          </q>
          <div className="row align-center justify">
            <div className="avatar mr-1">
              <Image alt="Carole" src={CaroleAvatar} width="50" height="50"/>
            </div>
            <div>
              Carole L. (DREAL Normandie)
            </div>
          </div>
        </div>
        <div className="column justify mb-1">
          <q className="text-center testimonial-text">
            En tant qu&apos;administrateur de la plateforme pour mon établissement, je mets à disposition l&apos;ensemble des outils communs des agents INRAE en quelques minutes.
          </q>
          <div className="row align-center justify">
            <div className="avatar mr-1">
              <Image alt="Marc" src={MarcAvatar} width="50" height="50"/>
            </div>
            <div>
              Marc L. (INRAE)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}