# 🚀 Career Recommendation System (MERN Stack)

## 📌 Overview
This is a full-stack MERN application that recommends career options based on user skills.  
Users enter their skills, and the system suggests suitable career paths using backend logic and MongoDB.

---

## 🛠️ Tech Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB

---

## ⚙️ Features
- Skill-based career suggestions
- REST API integration
- Simple and user-friendly UI
- Backend data handling using MongoDB

---

## 📂 Project Structure
career/
├── client/     # React frontend  
├── server/     # Node/Express backend  
├── .gitignore  
├── README.md  

---

## 🚀 How to Run

### 1. Clone the repo
git clone https://github.com/Soundaryaa05/career.git  
cd career  

### 2. Install dependencies
cd client  
npm install  

cd ../server  
npm install  

### 3. Setup environment variables
Create a `.env` file inside `server/` and add:

MONGO_URI=your_mongodb_connection  
PORT=5000  

### 4. Run the project
Start backend:
cd server  
npm start  

Start frontend:
cd client  
npm start  

---

## 📡 API Example

POST /recommend  

Request:
{
  "skills": ["JavaScript", "React"]
}

---

## 🎯 Future Improvements
- Add authentication (login/signup)
- Improve recommendation logic
- Deploy project online

---

## 👩‍💻 Author
Soundaryaa R

---

## ⭐ If you like this project, give it a star!
