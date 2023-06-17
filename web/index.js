const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const { Liquid } = require('liquidjs');
const engine = new Liquid();

app.engine('liquid', engine.express());
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set liquid to default
app.use(bodyParser.urlencoded());
app.use(express.static('./'));

app.get('/', (req, res) => {
    res.render('home');
});

const db = require('./db.json');

app.get('/location', (req, res) => {
    const obj = db.find(o => o.id == req.query.pin);
    console.log(obj);
    res.render('location', obj);
}); 

app.post('/', (req, res) => {

});

app.listen(port, () => console.log('started'));