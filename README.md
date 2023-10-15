Bugtracker
Overview

Bugtracker is a web-based project management and bug tracking system. It helps teams collaborate better by organizing tasks, issues, and milestones.
Table of Contents

    Overview
    Installation
    Usage
    Technologies
    Contribute

Installation
Backend

    Navigate to the backend directory.
    Install the Python dependencies.

pip install -r requirements.txt

Run the Django migrations.

python manage.py migrate

Run the Django development server.

    python manage.py runserver

Frontend

    Navigate to the frontend/bugtracker directory.
    Install the Node.js dependencies.

npm install

Run the React development server.

sql

    npm start

Database

    Navigate to the db directory.
    Run the Docker Compose file to set up the database.

    docker-compose up -d

Usage

    Open your web browser and go to http://localhost:8000/ for the backend and http://localhost:3000/ for the frontend.
    Follow the in-app instructions to start using Bugtracker.

Technologies

    Backend: Django
    Frontend: React
    Database: PostgreSQL (Dockerized)

Contribute

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add a new feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.