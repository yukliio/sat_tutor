import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const db = new pg.Client({
    user: "postgres", 
    host: "localhost",
    database: "SAT_TUTOR",
    password: "654QIAyuh-",
    port: 5432
});

console.log("Attempting to connect to the database...");

db.connect((err) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

app.use(bodyParser.json());


app.post('/submit', async (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO user_info (username, email, password) VALUES ($1, $2, $3)';
    const values = [username, email, password];

    try {
        const result = await db.query(query, values);
        console.log(result);
        res.send('User registration successful');
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Error registering user');
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});