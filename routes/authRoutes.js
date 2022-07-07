const express =require('express');
const passport = require('passport');
const router=express.Router();
const User=require('../models/user');



/*router.get('/fakeuser',async (req,res)=>{

    const user=new User({
        username:'Suraj',
        email:'suraj@gmail.com'
    });
   const newUser=await User.register(user,'suraj12');
   //passport uses sha1 cryptographic algo to convert passwords to hash code
   res.send(newUser);

})*/


//get the signUp page
router.get('/register',(req,res)=>{

    res.render('auth/signup');
});


//sign up/Register new user to the database
router.post('/register',async (req,res)=>{
    try{
        const {username,email,password}=req.body;
        const user=new User({
            username:username,
            email:email
        });
        await User.register(user,password);
        req.flash('success',`Welcome ${username}!, Please login to continue`);
        res.redirect('/products');
    }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }
    
});


//get the login page
router.get('/login',(req,res)=>{

    res.render('auth/login');
});

router.post('/login',
passport.authenticate('local',
{ 
    failureRedirect:'/login',
    failureFlash:true  
}), 
 (req,res)=>{
     const {username}=req.user;
    req.flash('success',`Welcome ${username} !`);
    res.redirect('/products');
      });

//Logout
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('success','Logout Successfully!');
    res.redirect('/login');
})






module.exports=router;