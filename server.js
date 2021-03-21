const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const SESS_SECRET = process.env.SESS_SECRET;
// NOTE: timeout set to 30 seconds for ease of grading
const SESS_TMEOUT = parseInt(process.env.SESS_TMEOUT);

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: SESS_SECRET,
  cookie: {
    maxAge: SESS_TMEOUT
  },
  rolling:true,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
});