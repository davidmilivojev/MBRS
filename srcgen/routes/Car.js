// Autogenerated from java.template file


var express = require('express')
var router = express.Router()
var CarCtrl = require('../controllers/carController')

router.get('/',function(req, res, next){

  CarCtrl.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.get('/:id', function(req, res, next){

  CarCtrl.findById(req.params.id, function(err,results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.post('/',function(req,res,next){

  CarCtrl.create(req.body,function(err,results){
    if(err){
      res.status(400).json({
        confirmation: 'fail',
        message: err,
        status: 400
      })
    }
    else
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.post('/:id',function(req,res,next){

  CarCtrl.delete(req.params.id,function(err,results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.post('/edit/:id',function(req,res,next){

  CarCtrl.update(req.params.id,req.body, function(err, results){
    if(err){
      res.status(400).json({
        confirmation: 'fail',
        message: err,
        status: 400
      })

    }
    else
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
module.exports = router