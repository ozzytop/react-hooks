import React, { useState } from 'react'
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

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}> {song.title} </li> )
                })}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
        </div>
     );
}
 
export default SongList;