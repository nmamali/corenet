// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// adding Helmet to enhance API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));

//importing route
var coreAppRoutes = require('./_coreApplication/routes/index');
coreAppRoutes(app); //register the core app api

var mobileAppRoutes = require('./_mobileApplication/routes/index');
mobileAppRoutes(app); //register the mobile app api

var webAppRoutes = require('./_webApplication/routes/index');
webAppRoutes(app); //register the web app api

// starting the server
app.listen(4000, () => {
  console.log('listening on port 4000');
});
