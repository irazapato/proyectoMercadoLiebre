//1.requerir express y crear variable para ejecutarlo y un console.log para ver que funciona

const express=require("express");
const app = express();

//2.no olvidar parentesis para que se ejecute


app.listen(process.env.PORT||3001,()=>{console.log("Servidor corriendo")});
//para unificar carpetas uso pathnode 
const path=require("path");
//3.para la ubicacion de los archivos estaticos e imagenes 
app.use(express.static("public"));



//4.para generar una ruta para mostrar el archivo en el navegador uso metodo sendfile
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"));
});
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"));
});
app.post("/register",(req,res)=>{
   res.redirect("/") 
});
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"));
});
app.post("/login",(req,res)=>{
    res.redirect("/") 
 });
 

 app.get("/shopping-cart",(req,res)=>{
    res.sendFile(path.resolve("./views/shopping-cart.html"));
});
app.post("/shopping-cart",(req,res)=>{
    res.redirect("/") 
 });