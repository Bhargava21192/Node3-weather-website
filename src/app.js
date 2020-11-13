const express=require('express')
const path =require('path')
const app= express()
const hbs=require('hbs')
const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//Directory path
const directorypath=(path.join(__dirname,'../public'))
const viewpath=(path.join(__dirname,'../templates/views'))
const partialpath=(path.join(__dirname,'../templates/partials'))


//using static path
app.use(express.static(directorypath))
//setting alternate directory
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

app.get('',(req,res)=>{
res.render('index',{
    title:"Weather",
    name:"Bhargava"
})
})

app.get('/about',(req,res)=>{

    res.render('about',{
        title:"About",
        name:"Bhargava"
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"Help",
        name:"Bhargava"
    })
})

app.get('/pages',(req,res)=>{
    res.render('pages',{
        number:1,
        name:"Bhargava"
    })
})
app.get('/weather',(req,res)=>{
    
    if(!req.query.address)
    {
        return res.send({
            error: "The address has to be mentioned to proceed further."
        })
    }
        geocode(req.query.address,(error,{Longitude,Latitude,Location}={})=>{   
        if(error)
        {
          return res.send({error})
        }
        
        forecast(Longitude,Latitude,(error,data)=>{
        if(error)
        {
         return res.send({error})
        }
    res.send({
    forecast:data,
    Location,
    Address: req.query.address
        })
     })
    })   
})

app.get('/products',(req,res)=>{
       
    if(!req.query.search)
    {
        return res.send({
            error:"A product term has to be entered."
        })
    }
    console.log(req.query.search,req.query.rating)
    res.send({
        products:[]
       })
    
    })


app.get('/help/*',(req,res)=>{
    res.render("404!",{
        title:"404",
        name:"Bhargava",
        error_message:"help article not found"
    })
})

app.get('*',(req,res)=>{

    res.render("404!",{
        title:"404",
        name:"Bhargava",
        error_message:"page not found"
    })
})

app.listen(3000,()=>{
    console.log("server is up and running on port 3000")
})
