const express = require('express');
const path = require('path');
const body_parser = require('body-parser');

// The app
const app = express();

// set The view engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(body_parser.urlencoded());// parse the body in eny request
app.use(express.static(path.join(path.dirname(require.main.filename), 'public')));// enable the public file

// Routes:
app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'StudyHub', username: 'נעמה'});
})

app.listen(3000);