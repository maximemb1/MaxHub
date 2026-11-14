export function CardJeux({jeux}) {
    return (
        <>
            <div className="card-jeu">
                <h3>{jeux.name}</h3>

                <img src={jeux.img} alt="Image d'illustration" width={120}/>

                <p className="description">{jeux.description}  </p>

                <a href={jeux.lien}>Jouer</a>
            </div>
        </>
    )
}