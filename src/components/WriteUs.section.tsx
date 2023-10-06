import flechette from "@images/flechette.png";


export default function WriteUs() {
    return (
        <section className="m-1">
            <div className="fr-container shadow write-us">
                <div className="row m-column">
                    <div className="row justify">
                        <img src={flechette.src} alt="" />
                    </div>
                    <div className="column justify">
                        <h5>Voulez-vous permettre à tous vos agents d'utiliser La Pastille ?</h5>
                        <p>Facilitez la diffusion de La Pastille auprès de vos équipes</p>
                        <div>
                            <button className="fr-btn">Nous écrire</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}