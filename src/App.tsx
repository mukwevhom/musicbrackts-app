import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import './App.scss';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Home from './pages/Home';
import Song from './pages/Song';
import Songs from './pages/Songs';
import UploadSongs from './pages/UploadSongs';
import AudioPlayer from './components/AudioPlayer';
import { useSelector } from 'react-redux';
import { State } from './state';

const App = () => {
    const state = useSelector((state: State) => state.audioPlayer)

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact children={<Home />} />
                    <Route path="/songs" exact children={<Songs />} />
                    <Route path="/song/:id" exact children={<Song />} />
                    <Route path="/artists" exact children={<Artists />} />
                    <Route path="/artist/:id" exact children={<Artist />} />
                    <Route path="/upload" exact children={<UploadSongs />} />
                    <Redirect to="/" />
                </Switch>
            </Router>
            {state.playerActive && (
                <AudioPlayer />
            )}
        </>
    );
}

export default App;
