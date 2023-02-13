import Image from 'next/image'
import CaroleAvatar from "@images/carole_dreal.jpg"

export const Testimonials = () => {
  return (
    <section className="bg-light-blue white">
      <div className="fr-container column justify">
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
    </section>
  )
}