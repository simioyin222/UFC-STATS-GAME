require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const WebSocket = require('ws');

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

