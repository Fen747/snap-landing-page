import Image from 'next/image'

export const Testimonials = () => {
  return (
    <section className="bg-light-blue white">
      <div className="container column justify">
        <q className="text-center testimonial-text">
          Nous avons pu créer des espaces personnalisables pour améliorer nos services publics.
        </q>
        <div className="row align-center justify">
          <div className="avatar mr-1">
            <Image />
          </div>
          <div>
            Carole L. (DREAL Normandie)
          </div>
        </div>
      </div>
    </section>
  )
}