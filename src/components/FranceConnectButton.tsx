import router from "next/router";

export default function FranceConnectButton() {

    return (
<div className="fr-connect-group">    
    <button className="fr-connect" onClick={() =>
                router.push(
                  "https://auth.agentconnect.gouv.fr/api/v2/interaction/1IByJ6L3_wWtwVeebHI1S"
                )}>        
        <span className="fr-connect__login">S&rsquo;identifier avec</span>        
        <span className="fr-connect__brand">FranceConnect</span>    
    </button>    
    <p>        
        <a href="https://franceconnect.gouv.fr/" target="_blank"  rel="noreferrer" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu&rsquo;est-ce que FranceConnect ?</a>    
    </p>
</div>
    )
}