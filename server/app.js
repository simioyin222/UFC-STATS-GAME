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