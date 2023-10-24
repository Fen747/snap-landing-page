import router from "next/router";

export default function FranceConnectButton() {

    return (
<div className="fr-connect-group">    
    <button className="fr-connect" onClick={() =>
                router.push(
                  "https://snap-auth.numerique.gouv.fr/auth/realms/rizomo/protocol/openid-connect/auth?client_id=sso&redirect_uri=https://rizomo.numerique.gouv.fr/_oauth/keycloak&scope=openid&response_type=code&kc_idp_hint=agentconnect"
                )}>        
        <span className="fr-connect__login">S&rsquo;identifier avec</span>        
        <span className="fr-connect__brand">FranceConnect</span>    
    </button>    
    <p>        
        <a href="https://franceconnect.gouv.fr/" target="_blank"  rel="noreferrer" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">
            Qu&rsquo;est-ce que FranceConnect
        </a>    
    </p>
</div>
    )
}
