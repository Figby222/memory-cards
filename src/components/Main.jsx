import { useState } from 'react';
import Card from './Card';

function getShuffledArray(array) {
    const newArray = [];
    while(newArray.length < array.length) {
        const index = Math.floor(Math.random() * array.length);
        if (!(newArray.includes(array[index]))) {
            newArray.push(array[index]);
        }
    }

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