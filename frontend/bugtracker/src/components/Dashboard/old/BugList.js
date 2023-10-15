// src/components/Dashboard/BugList.js
import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    api.get('/api/bugs')
      .then(response => setBugs(response.data))
      .catch(error => console.error('Error fetching bugs:', error));
  }, []);

  return (
    <div className="bug-list">
      {bugs.map(bug => (
        <div key={bug.BugID} className="bug-item">
          <h2>{bug.Title}</h2>
          <p>{bug.Description}</p>
          {/* ... other bug details ... */}
        </div>
      ))}
    </div>
  );
}

export default BugList;
