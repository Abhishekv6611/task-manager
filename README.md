# Task Manager (MERN Stack)

A simple Task Manager application built with **MongoDB, Express, React, and Node.js (MERN)**.  
It allows users to:
- Add new tasks
- Toggle task completion (checkbox)
- Delete tasks
- View created time for each task

---

## **Features**
- **Create**: Add new tasks with a title.
- **Read**: Fetch and display all tasks.
- **Update**: Mark tasks as completed/incomplete.
- **Delete**: Remove tasks from the list.
- **Timestamps**: Shows when a task was created.

---

## **Tech Stack**
### **Backend**
- Node.js
- Express
- MongoDB (Mongoose)
- Dotenv

### **Frontend**
- React.js (Vite)
- Axios
- Tailwind CSS (for styling)

---

## **Installation & Setup**

### **1. Clone the repository**
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager


2. Setup Backend
cd server
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Run the backend:
npm run dev

Setup Frontend

cd 'clinet' sorry its a spelling mistake its 'client'
npm install

Create a .env file:

VITE_API_URL=http://localhost:5000

Run the frontend:

npm run dev
