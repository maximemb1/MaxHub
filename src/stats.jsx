export function CardStats({titre, content}) {
    return (
        <div className="stat-card">
            <h3>{titre}</h3>

            <div className="stat-content">
                {content}
            </div>
        </div>
    )
}

export function CardCB({stats}){
    return (
        <div className="stat">
            <p>Meilleur score : {stats?.meilleur_score?.base ?? 0} </p>
            <p>Briques cassées : {stats?.stats?.briques_casse ?? 0}</p>
            <p>Or obetenu : {stats?.stats?.or_ttl ?? 0}</p>
            <p>Parties jouées : {stats?.stats?.parties_jouees ?? 0}</p>
        </div>
    )
}

export function CardSnake({stats}){
    return (
        <div className="stat">
            <p>Meilleur score : {stats?.stats?.meilleur_score ?? 0} </p>
            <p>Pommes Mangées : {stats?.stats?.pommes_mangees ?? 0}</p>
            <p>Longueur maximal : {stats?.stats?.longueur_max ?? 0}</p>
            <p>Or obetenu : {stats?.stats?.or_ttl ?? 0}</p>
            <p>Parties jouées : {stats?.stats?.parties_jouees ?? 0}</p>
            
        </div>
    )
}
/* manque partie jouées dans localstorage pour snake + bug pour longueur max + pommes mangées qui fait = au lieu de += */

export function CardPM({stats}){
    return (
        <div className="stat">
            <p>Meilleur score : {stats?.m_score ?? 0} </p>
            <p>Fantome mangés : {stats?.fantome_manges ?? 0}</p>
            <p>Billes engloutis : {stats?.bille_mangees ?? 0}</p>
            <p>Parties jouées : {stats?.parties_jouees ?? 0}</p>
        </div>
    )
}