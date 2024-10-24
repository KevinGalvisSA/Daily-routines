require('dotenv').config();
const express = require('express');
const session = require('express-session');
const connectDB = require('./api/server/db');
const app = express();
const userRouter = require('./api/routes/userRoute');
const activyRouter = require('./api/routes/activityRoute');
const objetivoRouter = require('./api/routes/objectiveRoute');
const colaboracionRouter = require('./api/routes/colaborationRoute');
const recordatorioRouter = require('./api/routes/recordatoryRoute');
const categoriaRouter = require('./api/routes/categoryRoute');
const etiquetaRouter = require('./api/routes/tagRoute');

// Conectar a MongoDB
connectDB();

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60 * 1000 } // Expira en 30 minutos (milisegundos)
}));

// Middleware para parsing JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('API de Daily Routines');
});

app.use("/user", userRouter)
app.use("/activity", activyRouter)
app.use('/objective', objetivoRouter);
app.use('/colaboration', colaboracionRouter);
app.use('/recordatory', recordatorioRouter);
app.use('/category', categoriaRouter);
app.use('/tag', etiquetaRouter)

// Iniciar el server
const PORT = process.env.EXPRESS_PORT;
const HOST = process.env.EXPRESS_HOST;
app.listen(PORT, () => console.log(`http://${HOST}:${PORT}`));
