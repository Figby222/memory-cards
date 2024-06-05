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
    let APIQueryKeys = [ "asdasd", "paiaufghisf", ";oiuhsadgiuagdh", "iauefiuaifu"];
    const [ selectedAPIQueryKeys, setSelectedAPIQueryKeys ] = useState([]);
    
    APIQueryKeys = getShuffledArray(APIQueryKeys);

    function cardClickHandler(key) {
        setSelectedAPIQueryKeys([ ...selectedAPIQueryKeys, key ]);

    }

    return (
        <>
            <main>
            </main>
        </>
    )
}

export default Main;