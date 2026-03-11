# TaskHive 🐝

A full stack task management application built with the MERN stack.

## 🌐 Live Demo
- Frontend: https://task-hive-seven.vercel.app
- Backend: https://taskhive-backend-lr78.onrender.com

## ✨ Features
- User authentication (Register/Login)
- JWT protected routes
- Create, edit, delete tasks
- Mark tasks as complete/pending
- Set due dates on tasks
- Set priority levels (Low/Medium/High)
- Search tasks by title
- Filter tasks by status
- Fully responsive on mobile

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt
- Joi Validation
- Helmet
- Express Rate Limit

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

**Clone the repo:**
```bash
git clone https://github.com/basitalilabs/TaskHive.git
cd TaskHive
```

**Setup Backend:**
```bash
cd backend
npm install
```

**Create `.env` in backend folder:**
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```
```bash
nodemon server.js
```

**Setup Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📁 Folder Structure
```
TaskHive/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── context/
        ├── pages/
        └── services/
```

## 👨‍💻 Author
**Basit Ali**
- GitHub: [@basitalilabs](https://github.com/basitalilabs)