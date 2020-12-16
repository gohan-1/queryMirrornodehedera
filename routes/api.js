const {Client, AccountId, PrivateKey, TopicCreateTransaction, TopicMessageSubmitTransaction, TopicMessageQuery} =require('@hashgraph/sdk')
const auth = require('../controllers/auth')
require("dotenv").config();

module.exports = (app) => {

    app.get("/api/auth",async (req, res)=>{
        try{
            let topicId = req.query.topicId;
            let hash =req.query.hash;
        
            let authd= await auth.verify(topicId,hash);
            if(authd){
                res.send(authd)
            }
        
            }catch(e){
                console.log("ii"+"error")
                res.send(e)
            }
        
    
        
    })
}