require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const WebSocket = require('ws');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  console.log('New client connected');
  ws.on('message', message => {
    console.log(`Received message => ${message}`);
  });
  ws.on('close', () => {
    console.log('Client has disconnected');
  });
});

// Express routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});