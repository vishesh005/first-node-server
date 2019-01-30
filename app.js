const express = require('express');
const app=express();
const hbs = require('hbs');
const port=process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'))
hbs.registerHelper('getCurrentYear',()=> new Date().getFullYear());
hbs.registerHelper('upperIt',(text)=>text.toUpperCase());

app.use((req,res,next)=>{
// console.log(`Request happen at ${new Date().toString()} on Ip ${req.ip}`)
res.render('maintain.hbs');
});

const home={
  homeTitle:'Home Page',
  pageHeading:'Welcome at Developer Vishesh World'
}

const about={
  aboutPageTitle:'About Page',
  pageHeading:'Who we are ? '
}

app.get('/',(req,res)=>{
 res.render('index.hbs',home);
});
app.get('/about',(req,res)=>{
 res.render('about.hbs',about);
});

app.listen(port,()=>{
  console.log(`Server is up and running at ${port}`);
});
