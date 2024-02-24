import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FighterCard from './components/FighterCard';

function App() {
  // Placeholder for fighter data
  const fighter = { name: 'John Doe', weight: '170 lbs', height: '6 ft' };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <FighterCard fighter={fighter} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
