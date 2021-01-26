var express = require("express"); 
var searchFlight = require("./routes/searchflight");
var searchResults = require("./routes/searchResults");
const bodyParser = require('body-parser');
var app = new express();

//var dbcontext=require("")

async function main() {
  
try{
    app.set('view engine', 'pug');
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/', searchFlight);
    app.use('/searchResults', searchResults);
    app.use('*/css',express.static('public/css'));
    
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] ="0";

}
catch(err){
    app.get("/", (req,res)=>{
        res.send(err);
    })
}
app.listen("3000");
}

main();