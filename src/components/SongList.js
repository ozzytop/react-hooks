import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSong';

const SongList = () => {
    
    // we define the state in the following method
    /*
        The useState() function returns 2 things: the data itself and a function. So we use destructuring 
        to get that information. 
    */
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gosppel', id: 2},
        {title: 'this wild darkness', id: 3},
    ]);
    
    const addSong = (title) => {
        setSongs([...songs, {title: title, id: uuid()}])
    }
    

    const [age, setAge] = useState(20);

    // This function is called every time that the component render or re renders
    // The second parameter is to limit when to execute
    useEffect(() => {
        console.log('use Effect hoook ran', songs);
    }, [songs]);
    
    useEffect(() => {
        console.log('Age updated', age);
    }, [age]);
    

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}> {song.title} </li> )
                })}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
            <button onClick={() => setAge(age + 1) }>Add 1 to age: {age} </button>
        </div>
     );
}
 
export default SongList;