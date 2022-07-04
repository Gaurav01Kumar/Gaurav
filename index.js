const express=require("express");

const hbs= require("hbs")
const port =process.env.PORT || 3000;
const app=express();
const path=require("path");
const static_path=path.join(__dirname,"./public");
const templates_path=path.join(__dirname,"./templates/views")
//app.use(express.static(path.join(__dirname,"../Public")))

app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views" , templates_path);
app.get("/", (req,res)=>{
res.render("index");
})
app.get("/about", (req,res)=>{
    res.render("about");
    })
    app.get("/ContactUs", (req,res)=>{
        res.render("conect");
        })
        app.get("/skills", (req,res)=>{
            res.render("skills");
            })
            app.get("/:id", (req,res)=>{
                res.send("Page not found ")
                })
app.listen(port ,()=>{
    console.log(`Server is running on https://localhost:${port}`)
})