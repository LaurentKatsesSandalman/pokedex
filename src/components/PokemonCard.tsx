interface PokemonProps {
    pokemon: {
        name: string,
        imgSrc?: string,
    }
}


function PokemonCard({ pokemon }: PokemonProps) {
    return <figure>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name} />}
        <figcaption>{pokemon.name}</figcaption>
    </figure>
}

export default PokemonCard