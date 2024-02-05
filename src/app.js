import express from "express";
import handlebars from 'handlebars';
import __dirname from "./utils.js";
import viewRouter from './routes/views.router.js'


const app = express();
const PORT = process.env.PORT || 8080; 
const server = app.listen(PORT, ()=> {loggers.info(`Conectado al puerto ${PORT}`)})

app.engine('handlebars',handlebars.engine());
app.set('view engine','handlebars');
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+'/public'))

app.use('/', viewRouter); 