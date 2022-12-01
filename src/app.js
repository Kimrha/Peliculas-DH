const express = require('express');
const app = express();
const methodOverride = require('method-override'); //para operar con put y delete

const session = require('express-session');

//¿?
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//le decimos a la aplicacion que queremos capturar todo aquello que venga de un formulario
//como si fuera un objeto literal.

app.use(session({
    secret: 'Es un secreto',
    resave:false,
    saveUninitialized: false,
}))

app.use(methodOverride("_method"));//para operar con PUT and DELETE

const userRoutes = require('./routes/userRoutes.js');

const indexRoutes = require('./routes/indexRoutes.js');

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use('', indexRoutes);

app.use('/user', userRoutes);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000');
})