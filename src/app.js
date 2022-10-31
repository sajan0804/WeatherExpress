//use of Express
const express=require('express')
const app=express()

//for getting path we want core modeule of path
const path=require('path')

//for the use of partial path
const hbs=require('hbs')

//for hosting on a port no
const port=process.env.PORT || 8000

//diffrent path:
const staticPath=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

//use of handlebars
app.set('view engine', 'hbs');

//we use templates/views not directly use views that's whay mention it 
app.set('views',template_path)

//register partial path
hbs.registerPartials(partials_path)

//for use of static website
app.use(express.static(staticPath))



//routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404errorPage",{
        errorMsg:"Oops ! Page is Not Available"
    })
})


app.listen(port,()=>{
    console.log(`listening to the port ar${port}`)
})