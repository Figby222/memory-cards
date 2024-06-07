import { useState, useEffect } from 'react';

function Card({ id, onClick }) {
    const [ characterName, setCharacterName ] = useState();
    const [ characterAttributes, setCharacterAttributes ] = useState({});
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(response => response.json())
        .then(response => {
            setCharacterName(response.name);
            setCharacterAttributes({
                color: response.color.name,
                capture_rate: response.capture_rate,
            });
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
                <div className="character-attributes">
                    {Object.keys(characterAttributes).map(key => {
                        return <p key={key} className="character-description">
                                {key}: {characterAttributes[key]}
                            </p>
                    })}
                </div>
            </button>
        </>
    )
}

export default Card;

