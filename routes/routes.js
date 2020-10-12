const {Router } = require("express");
const router = Router();

router.get('/',(req,res)=>{
res.render('index',{title:'Clase Express-Pug'})

})

router.get('/login',(req,res)=>{
    res.render('login',{error:false});
});

router.post('/signin',(req,res)=>{
const user =req.body.email;
const pass = req.body.password;
if(user==="profesor@elpoli.edu.com" && pass==="54321"){
    res.render('dashboard',{
      title:'Dashboard',
      datos:{email:user,
      alumnos:[
      'Carolina Mejía',
      'Andrés Calderón'
      ]
    }  
    });
    }
    else{
    res.render('login',{error:true})
     }

})




module.exports =router;