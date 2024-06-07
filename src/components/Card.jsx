import { useState, useEffect } from 'react';

function Card({ id, onClick }) {
    const [ characterName, setCharacterName ] = useState();
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(response => response.json())
        .then(response => {
            setCharacterName(response.name);
            console.log(`${id}: `, response);
        });
    }, [id])
    return (
        <>
            <button 
                className="card"
                type="button"
                onClick={() => onClick(id)}
            >
                <h2 className="character-name">{characterName}</h2>
            </button>
        </>
    )
}

export default Card;

