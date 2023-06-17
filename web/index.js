const express = require('express');

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

});

app.post('/', (req, res) => {

});

app.listen(port, () => console.log('started'));