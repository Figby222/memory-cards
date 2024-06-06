import { useState } from 'react';

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
            </main>
        </>
    )
}

export default Main;