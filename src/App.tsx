import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import './App.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact >home</Route>
                <Route path="/songs" >Songs</Route>
                <Route path="/song/:id" >Song</Route>
                <Route path="/artists" >Artists</Route>
                <Route path="/artist/:id" >Artist</Route>
                <Route path="/upload" >Upload</Route>
            </Switch>
        </Router>
    );
}

export default App;
