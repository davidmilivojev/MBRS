var Owner = require('../models/Owner')

module.exports ={
  find : function(params, callback){
    Owner.find(params, function(err,owner){
      if(err){
        callback(err,null)
        return
      }
      callback(null,owner)
    })
  },
  findById: function(id, callback){
  Owner.findById(id, function(err,owner){
    if(err){
      callback(err, null)
      return
    }
    callback(null,owner)
  })
},
create: function(params, callback){
  Owner.create(params, function(err,owner){
    if(err){
      callback(err, null)
      return
    }
    callback(null,owner)
  })

},
update: function(id, params, callback){
  Owner.findByIdAndUpdate(id, params, {new: true}, function(err,owner){
    if(err){
      callback(err,null)
      return
    }
    callback(null, owner)
  })

},
delete: function(id, callback){
  Owner.findByIdAndRemove(id, function(err){
    if(err){
      callback(err,null)
      return
    }
    callback(null,{status: "ok"})
  })
}
}