const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const flash = require('connect-flash');

const dotenv = require('dotenv').config();
const mysql = require('./database/mysql');

const shopRoutes = require('./routes/shopRoutes');
const shopAuthRoutes = require('./routes/shopAuthRoutes');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(morgan('tiny'));
app.use(express.static('./public'));
app.use(session({
    secret: 'app secret',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', shopRoutes);
app.use('/auth', shopAuthRoutes);

mysql.sync({ logging: false })
    .then(() => console.log('Database connected.'))
    .catch((error) => console.log(error));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to ${port}.`));