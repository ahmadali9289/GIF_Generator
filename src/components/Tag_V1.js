import React, {useState} from 'react';
import useGif from '../hooks/useGif';


const Tag_V1 = () => {

    const [tag, setTag] = useState('dogs')
    const {gif, fetchGif} = useGif(tag);

    const handleClick= () => {
        fetchGif(tag);   
    }

    return (
        <div className="container">
            <h1>Tag Gif Generator Component</h1>
            <img src={gif} width="500" alt="Tag Image" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}> Click for New Gif</button>
        </div>
    );
}

export default Tag_V1;