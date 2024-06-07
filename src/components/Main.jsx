import { useState } from 'react';
import Card from './Card';

function getShuffledArray(array) {
    let arrayCopy = [ ...array ];
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const index = Math.floor(Math.random() * arrayCopy.length);

        newArray.push(arrayCopy[index]);

        arrayCopy = arrayCopy.slice(0, index)
            .concat(arrayCopy.slice(index + 1));
    }
    // console.log(newArray);

    return newArray;
}

function Main() {
    let APIResourceIds = [ 4, 6, 8, 10];
    const [ selectedAPIResourceIds, setSelectedAPIResourceIds ] = useState([]);
    const [ currentScore, setCurrentScore ] = useState(0);
    
    APIResourceIds = getShuffledArray(APIResourceIds);

    function cardClickHandler(resourceId) {
        setSelectedAPIResourceIds([ ...selectedAPIResourceIds, resourceId ]);
        setCurrentScore(currentScore + 1);
    }

    return (
        <>
            <main>
                <h2 className="score">Score: {currentScore}</h2>
                <section className="cards">
                    {APIResourceIds.map((id, index) => {
                        return (
                            <Card 
                                key={index}
                                id={id}
                                onClick={cardClickHandler}
                            />
                        )
                    })}
                </section>
            </main>
        </>
    )
}

export default Main;