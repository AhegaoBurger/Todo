// src/components/Dashboard/ProjectList.js
import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project.ProjectID} className="project-item">
          <h2>{project.ProjectName}</h2>
          <p>{project.Description}</p>
          {/* ... other project details ... */}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
