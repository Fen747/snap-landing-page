import Image from 'next/image'
import ToolsImg from "@images/outilsHD.png"

const text = "Suite logicielle d'outils interministériels : collaborer, communiquer, dématérialiser"

export const ImpactServices = () => {
  return (
    <section id="impact-services" className='fr-container'>
      <h3>
        Des services à impact
      </h3>
      <p className="bold text-center">
        {text}
      </p>
      <Image src={ToolsImg} alt={text} />
    </section>
  )
}