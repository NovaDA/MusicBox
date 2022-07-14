import React, {useEffect, useState} from 'react';
import './App.css'
import {Playlist, Home} from './Pages';
import {default as Layout } from './layouts'
import {Routes, Route } from 'react-router-dom'
import {Outlet, useNavigate} from 'react-router-dom';
import { ContextProvider } from './Context/context';
import {useSelector, useDispatch} from 'react-redux'
import {like, dislike} from './actions'


function App() {
  let navigate = useNavigate();
  const feedBack = useSelector(state => state.likeReducer)
  const dispatch = useDispatch();

  console.log(feedBack);
  
  function handlelike(){
    dispatch(like(1))
  }

  function handledislike(){
    dispatch(dislike(1))
  }

  return (
    <>
    <ContextProvider>
        <button onClick={ () => navigate("/")}><h1>Home</h1></button><Outlet />
        <button onClick={ () => navigate("/Playlist")}><h1>Playlist</h1></button>
        <button onClick={ () => navigate("/About")}><h1>About</h1></button>
        <button onClick={() => handlelike()}>Like!</button>
        <button onClick={() => handledislike()}>disLike!</button>
        <h1 >THE SONG IS {feedBack}</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Playlist" element={<Playlist />} />
      </Routes>
    </ContextProvider>
     
    </> 
  );
}

export default App;


 /* <ArtistForm artistName={artistName} piecesPlayed={piecesPlayed} />
        <Composition compositionNames={compositionNames} setCompositionNames={setCompositionNames}/> */


        // <Route path="/" element={<Home compositionNames={compositionNames} setCompositionNames={setCompositionNames} />} />
                // <Route path="playlist" element={<Playlist  compositionNames={compositionNames} setCompositionNames={setCompositionNames}/>} />
