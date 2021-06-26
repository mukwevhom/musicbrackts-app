import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import './App.scss';
import Artist from './pages/Artist';
import Artists from './pages/Artists';
import Home from './pages/Home';
import Song from './pages/Song';
import Songs from './pages/Songs';
import UploadMusic from './pages/UploadMusic';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact children={<Home />} />
                <Route path="/songs" exact children={<Songs />} />
                <Route path="/song/:id" exact children={<Song />} />
                <Route path="/artists" exact children={<Artists />} />
                <Route path="/artist/:id" exact children={<Artist />} />
                <Route path="/upload-music" exact children={<UploadMusic />} />
            </Switch>
        </Router>
    );
}

export default App;
