export function CardJeux({jeux}) {
    return (
        <>
            <div className="card-jeu">
                <h3>{jeux.name}</h3>

                <p className="description">{jeux.description}  </p>

                <a href={jeux.lien}>Jouer</a>
            </div>
        </>
    )
}