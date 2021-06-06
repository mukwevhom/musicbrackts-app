import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import './App.scss';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact children={<Home />} ></Route>
                <Route path="/songs" >Songs</Route>
                <Route path="/song/:id" >Song</Route>
                <Route path="/artists" >Artists</Route>
                <Route path="/artist/:id" >Artist</Route>
                <Route path="/upload-music" >Upload</Route>
            </Switch>
        </Router>
    );
}

export default App;
