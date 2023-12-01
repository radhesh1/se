// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import Graph from './components/Stats';
import Development from './components/Development';
import Engagement from './components/Engagement';
import Learning from './components/Learning';
import MentorGuidance from './components/MentorGuidance';
import Dashboard from './components/Dashboard';
import Settings from './components/settings';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/roadmap" component={Roadmap} />
                    <Route path="/graph" component={Graph} />
                    <Route path="/development" component={Development} />
                    <Route path="/engagement" component={Engagement} />
                    <Route path="/learning" component={Learning} />
                    <Route path="/mentor-guidance" component={MentorGuidance} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
