const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}


module.exports.connect = (done) =>{
    const url = 'mongodb://localhost:27017'
    const dbname ='to-do-app'

    mongoClient.connect(url,{useUnifiedTopology:true},(err,data) => {
        if(err) 
            return done(err)
        state.db = data.db(dbname)
        done()
    })
}
    


module.exports.get = function(){
    return state.db
}
