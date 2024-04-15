//const http = require('http');
//const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:  false}));
//app.use('/',(req,res,next)=>{
  //  console.log("This always runs!");
    //next();
//})
//app.use()
app.use('/add-product', (req, res, next)=>{
    console.log('In  another the middlware')
    //res.send('<h1>The "Add Product" Page </h1>');
    res.send('<form action = "/product" method ="POST"><label>Enter the Product name:</label><input type="text" name="title"><br><br><label>Enter the quantity</label><input type="number" name="qunatity"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/'); // this function is used to redirect to route
})
app.use('/', (req, res, next)=>{
    //console.log('In  another the middlware')
    
    res.send('<h1>Hello from Express</h1>');
});

//const server = http.createServer(app);
//const PORT = 3000;

//server.listen(PORT, () => {
  //  console.log(`Server is running on port ${PORT}`);
//});
//server.listen(3000);
app.listen(3000);