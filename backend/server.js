const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();
connectDB();

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many requests, please try again later"
    }
});

app.use(cors({
    origin: [
        'https://task-hive-seven.vercel.app',
        'http://localhost:5173'
    ],
    credentials: true
}));

app.use(express.json());
app.use(helmet());
app.use(limiter);

app.get("/", (req, res) => {
    res.send("Welcome to TaskHive API");
});

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Server Error"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});