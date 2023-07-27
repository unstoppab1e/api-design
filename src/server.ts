import express from 'express'
import router from './router'
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.status(401);
    res.send('Not allowed');
});

app.get('/', (req, res) => {
    console.log('Hello world received a request.');
    res.status(200)
    res.json({ message: 'Hello world!' });
});

app.use('/api', router)

export default app;
