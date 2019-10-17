const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    helmet = require('helmet'),
    compression = require('compression')

// Setting up Controllers
const indexController = require('./controllers/index');
const arsenalController = require('./controllers/arsenalController');

const app = express();

// telling express to use the es6 Templating Engine
app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(helmet());

// Telling Express to use the routes
app.use('/', indexController);
app.use('/arsenal', arsenalController);

module.exports = app;
