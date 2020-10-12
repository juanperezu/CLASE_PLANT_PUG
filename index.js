const express = require('express');
const path =require('path'); 
const bodyParser=require('body-parser');
const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// funcion middleware  para archivos estáticos
app.use(express.static(path.join(__dirname,'public')))
console.log(__dirname);

// especificar el motor de plantillas
app.set('view engine','pug');


// establecer los archivos routes ( rutas)
app.use(require('./routes/routes'));

app.listen(4001,()=>{
console.log("Server on port 4001 ");
})