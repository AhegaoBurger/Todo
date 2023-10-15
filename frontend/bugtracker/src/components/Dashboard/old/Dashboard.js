// src/components/Dashboard/Dashboard.js
import React from 'react';
import ProjectList from './ProjectList';
import BugList from './BugList';
import CommentList from './CommentList';
import StatusUpdateList from './StatusUpdateList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';

function Dashboard(props) {
  return (
    <div className="dashboard container">
      <h1 className="my-4">Welcome, {props.username}</h1>
      {/* Navigation menu to switch between different sections */}
      <Tabs
        activeKey={props.section}
        onSelect={(k) => props.setSection(k)}
        className="mb-3"
      >
        <Tab eventKey="projects" title="Projects">
          <ProjectList />
        </Tab>
        <Tab eventKey="bugs" title="Bugs">
          <BugList />
        </Tab>
        <Tab eventKey="comments" title="Comments">
          <CommentList />
        </Tab>
        <Tab eventKey="statusUpdates" title="Status Updates">
          <StatusUpdateList />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Dashboard;
