const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const date = require("./date")

app.set("view engine","ejs")


let PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))


app.get("/",(req,res)=>{
    let day = date()
    res.render("list" ,{listTitle:day,newlistItems:listItems})

})

app.get("/work",(req,res)=>{
    res.render("list" ,{listTitle:"Work List",newlistItems:workItems})
})


app.get("/about",(req,res)=>{
    res.render("about")
})




app.post("/",(req,res)=>{
    var item = req.body.listItem
    
    listItems.push(item)

    res.redirect("/")
    
})

app.post("/work",(req,res)=>{
    var workItem = req.body.listItem
    workItems.push(workItem)
    res.redirect("/work")
})

app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`);
})  