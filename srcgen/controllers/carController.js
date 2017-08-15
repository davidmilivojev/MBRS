var Car = require('../models/Car')

module.exports ={
  find : function(params, callback){
    Car.find(params, function(err,car){
      if(err){
        callback(err,null)
        return
      }
      callback(null,car)
    })
  },
  findById: function(id, callback){
  Car.findById(id, function(err,car){
    if(err){
      callback(err, null)
      return
    }
    callback(null,car)
  })
},
create: function(params, callback){
  Car.create(params, function(err,car){
    if(err){
      callback(err, null)
      return
    }
    callback(null,car)
  })

},
update: function(id, params, callback){
  Car.findByIdAndUpdate(id, params, {new: true}, function(err,car){
    if(err){
      callback(err,null)
      return
    }
    callback(null, car)
  })

},
delete: function(id, callback){
  Car.findByIdAndRemove(id, function(err){
    if(err){
      callback(err,null)
      return
    }
    callback(null,{status: "ok"})
  })
}
}