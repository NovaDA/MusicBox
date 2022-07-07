import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import { Context } from '../../Context/context';

const Playlist = () => {

    const {songs, setSongs} = useContext(Context);
    console.log(songs);
    let songPath = ''

    const renderRows = () => {
        console.log(songs);
        if(songs !== undefined)
        return songs.map(p => <tr><td>{p.name}</td><td><img src={p.img} /></td><td>{p.releaseDate}</td><td><button onClick={ () => playSong(p)}>Played</button>
        <button onClick={ () => deleteSong(p)}>Delete</button></td><td><embed src={p.songURL}  allow="encrypted-media" /></td></tr>)
    }

      function playSong(e){
        console.log(e.songURL);
        
      }

      function deleteSong(target){
        setSongs(songs.filter( e => e.id !== target.id));
      }

      // useEffect(() => {
        
      //     renderRows();
      // }, [])
    
    return (
        <>
       
          <table style={{ border: "none", width: "80vw", textAlign: "center" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              { renderRows() }
            </tbody>
          </table>

        </>
    );

};

    export default Playlist;