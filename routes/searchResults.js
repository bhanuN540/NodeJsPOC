var express = require('express');
var router = express.Router();
var CosmosClient=require("@azure/cosmos").CosmosClient;
var config=require("../config");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] ="0";

const {endpoint,key,databaseId,containerId}=config;

var client=new CosmosClient({endpoint,key});
const database = client.database(databaseId);
const container = database.container(containerId);

router.post('/', function(req, res, next){
    
    (async () => {
        try{
            console.log('SELECT * from c where c.originCode="'+req.body.origin+'" & c.destinationCode="' + req.body.destination+'"');
        const querySpec = {
            query: 'SELECT * from c where c.originCode="'+req.body.origin+'"and c.destinationCode="' + req.body.destination+'"'
        };
        const { resources: items } = await container.items
            .query(querySpec)
            .fetchAll();

            res.render('searchResults',{ title: 'Flight Results', flightsData:items})
        }
        catch(msg){
            console.log(msg)
        }
      })();

    

});

//export this router to use in our index.js
module.exports = router;