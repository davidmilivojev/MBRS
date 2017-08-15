var Bank = require('../models/Bank')

module.exports ={
  find : function(params, callback){
    Bank.find(params, function(err,bank){
      if(err){
        callback(err,null)
        return
      }
      callback(null,bank)
    })
  },
  findById: function(id, callback){
  Bank.findById(id, function(err,bank){
    if(err){
      callback(err, null)
      return
    }
    callback(null,bank)
  })
},
create: function(params, callback){
  Bank.create(params, function(err,bank){
    if(err){
      callback(err, null)
      return
    }
    callback(null,bank)
  })

},
update: function(id, params, callback){
  Bank.findByIdAndUpdate(id, params, {new: true}, function(err,bank){
    if(err){
      callback(err,null)
      return
    }
    callback(null, bank)
  })

},
delete: function(id, callback){
  Bank.findByIdAndRemove(id, function(err){
    if(err){
      callback(err,null)
      return
    }
    callback(null,{status: "ok"})
  })
}
}