import { useEffect } from 'react';

function Card({ id, onClick }) {
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(response => response.json())
        .then(response => {
            console.log(`${id}: `, response.name);
        });
    }, [id])
    return (
        <>
            <button 
                className="card"
                type="button"
                onClick={() => onClick(id)}
            >
                <p>{id}</p>
            </button>
        </>
    )
}

export default Card;

