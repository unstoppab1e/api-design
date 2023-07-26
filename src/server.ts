import express from 'express'

const app = express();

app.get('/', (req, res) => {
    console.log('Hello world received a request.');
    res.status(200)
    res.json({ message: 'Hello world!' });
});

export default app;
