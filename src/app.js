const express = require('express');
const app = express();
const methodOverride = require('method-override'); //para operar con put y delete

//modulo que nos permite trabajar con cookies :D
const cookies = require('cookie-parser');

//requerir express-session para las sesision de usuario
const session = require('express-session');

//middleware creado para que muestre crear usuario e iniciar sesion si no estoy loggeado
//y que muestre el perfil de usuario solo si estoy logeado
const userLoggedMiddleware = require('./middlewares/globals/userLoggedMiddleware')
//tiene q iniciarse si o si despues de la session

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

app.use(userLoggedMiddleware);
app.use(cookies());

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