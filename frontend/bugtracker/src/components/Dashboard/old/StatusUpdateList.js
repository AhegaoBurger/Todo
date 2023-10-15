// src/components/Dashboard/StatusUpdateList.js
import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function StatusUpdateList() {
  const [statusUpdates, setStatusUpdates] = useState([]);

  useEffect(() => {
    api.get('/api/statusupdates')
      .then(response => setStatusUpdates(response.data))
      .catch(error => console.error('Error fetching status updates:', error));
  }, []);

  return (
    <div className="status-update-list">
      {statusUpdates.map(update => (
        <div key={update.StatusUpdateID} className="statusupdate-item">
          <p>Old Status: {update.OldStatus}</p>
          <p>New Status: {update.NewStatus}</p>
          {/* ... other status update details ... */}
        </div>
      ))}
    </div>
  );
}

export default StatusUpdateList;
