# Career Recommendation System (MERN Stack)

## Overview
The Career Recommendation System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
It analyzes user skills and provides suitable career recommendations based on backend logic and stored data.

This project demonstrates end-to-end integration of frontend, backend, and database components in a scalable web application.

---

## Features
- Skill-based career recommendations  
- RESTful API integration  
- Responsive and user-friendly interface  
- Dynamic data handling using MongoDB  

---

## Tech Stack
- Frontend: React.js  
- Backend: Node.js, Express.js  
- Database: MongoDB  

---

## Project Structure
career/
├── client/     (React frontend)  
├── server/     (Node.js backend)  
├── README.md  

---

## Installation and Setup

### Clone the repository
git clone https://github.com/Soundaryaa05/career.git  
cd career  

### Install dependencies
cd client  
npm install  

cd ../server  
npm install  

### Environment Variables
Create a `.env` file inside `server/` and add:

MONGO_URI=your_mongodb_connection  
PORT=5000  

### Run the application

Start backend:
cd server  
npm start  

Start frontend:
cd client  
npm start  

---

## API Example

POST /recommend  

Request:
{
  "skills": ["JavaScript", "React"]
}

Response:
{
  "careers": ["Frontend Developer", "Full Stack Developer"]
}

---

## Future Improvements
- Add user authentication  
- Improve recommendation logic  
- Deploy application online  

---

## Authors
- Soundaryaa R  
- Sannidhi Shetty  

---

## License
This project is developed for educational purposes.