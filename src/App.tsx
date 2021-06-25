import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import './App.scss';
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
                <Route path="/artists" >Artists</Route>
                <Route path="/artist/:id" >Artist</Route>
                <Route path="/upload-music" exact children={<UploadMusic />} />
            </Switch>
        </Router>
    );
}

export default App;
