import React, {useState} from 'react';
import useGif from '../hooks/useGif';


const Random_V1 = () => {

    const [tag, setTag] = useState('dogs')
    const {gif, fetchGif} = useGif(tag);

    const handleClick= () => {
        fetchGif(tag);   
    }

    return (
        <div className="container">
            <h1>Random Gif Generator Component</h1>
            <img src={gif} width="500" alt="Tag Image" />
            <button onClick={handleClick}> Click for New Random Gif</button>
        </div>
    );
}

export default Random_V1;