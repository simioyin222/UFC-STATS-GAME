import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import FighterCard from './components/FighterCard';

function App() {
  const [fighters, setFighters] = useState([]);

  // Fetch fighters from the backend on component mount
  useEffect(() => {
    axios.get('http://localhost:3001/fighters')
      .then(response => {
        // Update state with fetched fighters
        setFighters(response.data);
      })
      .catch(error => console.error("There was an error fetching the fighters: ", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes> {/* Updated from Switch to Routes */}
          <Route path="/" element={
            <div>
              {/* Render a FighterCard for each fighter */}
              {fighters.map(fighter => (
                <FighterCard key={fighter.id} fighter={fighter} />
              ))}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
