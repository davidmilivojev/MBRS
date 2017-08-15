var Address = require('../models/Address')

module.exports ={
  find : function(params, callback){
    Address.find(params, function(err,address){
      if(err){
        callback(err,null)
        return
      }
      callback(null,address)
    })
  },
  findById: function(id, callback){
  Address.findById(id, function(err,address){
    if(err){
      callback(err, null)
      return
    }
    callback(null,address)
  })
},
create: function(params, callback){
  Address.create(params, function(err,address){
    if(err){
      callback(err, null)
      return
    }
    callback(null,address)
  })

},
update: function(id, params, callback){
  Address.findByIdAndUpdate(id, params, {new: true}, function(err,address){
    if(err){
      callback(err,null)
      return
    }
    callback(null, address)
  })

},
delete: function(id, callback){
  Address.findByIdAndRemove(id, function(err){
    if(err){
      callback(err,null)
      return
    }
    callback(null,{status: "ok"})
  })
}
}