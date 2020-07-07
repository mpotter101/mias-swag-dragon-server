// Keep App logs separate from possible superceding logs
console.log ('');

// Import dependencies
import express from 'express'; // The cool thing that makes NodeJS easy
import arangojs from 'arangojs'; // Our database
import bodyParser from 'body-parser'; // lets us handle POST requests
import session from 'express-session'; // handles keeping people logged in

// Create App
let app = express ();

// Set up parsing POST requests, you can ignore thisz
app.use (bodyParser.urlencoded ({ extended: false }));
app.use (bodyParser.json ());

// Setup session handling
// you can ignore this too
app.use ( session ({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Lets our browser access files
app.use ('/', express.static ('./browser'));

// bring in our routes
import Router from './Router.js';
let router = new Router ({ app });

// Start the app
const IP = '0.0.0.0';
const PORT = 3000

let requestHandler = app.listen (
    PORT,
    IP,
    () => {
        console.log ('Mia\'s swag server is running at', IP + ':' + PORT);
    }
)
