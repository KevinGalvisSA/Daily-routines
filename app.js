require('dotenv').config();
const express = require('express');
const connectDB = require('./api/server/db');
const app = express();
const userRouter = require('./api/routes/userRoute')

// Conectar a MongoDB
connectDB();

// Middleware para parsing JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('API de Daily Routines');
});

app.use("/api", userRouter)

// Iniciar el server
const PORT = process.env.EXPRESS_PORT;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
