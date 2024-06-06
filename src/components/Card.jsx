function Card({ id, onClick }) {
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

