//App.js
import React from 'react';
import AppShell from './AppShell';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Texts from './Texts';
import Words from './Words';
import Profile from './Profile';

class App extends React.Component{
    render() {
        return(
            <Router>
                <AppShell>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/texts" element={<Texts />}/>
                        <Route exact path="/words" element={<Words />}/>
                        <Route exact path="/profile" element={<Profile />}/>
                    </Routes>
                </AppShell>
            </Router>
        );
    }
}

export default App;