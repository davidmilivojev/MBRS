var Covek = require('../models/Covek')

module.exports ={
  find : function(params, callback){
    Covek.find(params, function(err,covek){
      if(err){
        callback(err,null)
        return
      }
      callback(null,covek)
    })
  },
  findById: function(id, callback){
  Covek.findById(id, function(err,covek){
    if(err){
      callback(err, null)
      return
    }
    callback(null,covek)
  })
},
create: function(params, callback){
  Covek.create(params, function(err,covek){
    if(err){
      callback(err, null)
      return
    }
    callback(null,covek)
  })

},
update: function(id, params, callback){
  Covek.findByIdAndUpdate(id, params, {new: true}, function(err,covek){
    if(err){
      callback(err,null)
      return
    }
    callback(null, covek)
  })

},
delete: function(id, callback){
  Covek.findByIdAndRemove(id, function(err){
    if(err){
      callback(err,null)
      return
    }
    callback(null,{status: "ok"})
  })
}
}