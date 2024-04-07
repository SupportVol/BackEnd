import express from 'express';
import PORT from './config/app.js';
import authRouter from './routes/auth.js'
// import dotenv from 'dotenv'

// dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

app.use('/api/auth/', authRouter);