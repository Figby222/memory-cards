import { useState, useEffect } from 'react';
import '../styles/Card.css';

function Card({ id, onClick }) {
    const [ characterName, setCharacterName ] = useState();
    const [ characterAttributes, setCharacterAttributes ] = useState({});
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(response => {
            setCharacterName(response.name);
            setCharacterAttributes({
                hp: response.stats[0].base_stat,
                attack: response.stats[1].base_stat,
                defense: response.stats[2].base_stat
            })
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

