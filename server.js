// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

app.listen(port, ()=>{
    console.log(`Running on: http://localhost:${port}`);
});


// GET route, send all data to client 

app.get('/all' ,(req,res)=>{

    res.send(projectData)
})

// POST route 

app.post('/weatherData' , (req , res)=>{

    projectData.date = req.body.date;
    projectData.temp = req.body.temp;
    projectData.content = req.body.content;
    
    res.send(projectData);

	console.log(projectData);

})

