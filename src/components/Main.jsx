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
    let APIResourceIds = [ "asdasd", "paiaufghisf", ";oiuhsadgiuagdh", "iauefiuaifu"];
    const [ selectedAPIResourceIds, setSelectedAPIResourceIds ] = useState([]);
    
    APIResourceIds = getShuffledArray(APIResourceIds);

    function cardClickHandler(resourceId) {
        setSelectedAPIResourceIds([ ...selectedAPIResourceIds, resourceId ]);

    }

    return (
        <>
            <main>
                {APIResourceIds.map(id => {
                    return (
                        <Card 
                            key={id}
                            id={id}
                            onClick={cardClickHandler}
                        />
                    )
                })}
            </main>
        </>
    )
}

export default Main;