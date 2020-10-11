var express = require('express');
var router = express.Router();
const taskHelpers = require('../helpers/task-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  taskHelpers.getAllTasks().then((tasks) =>{
    console.log(tasks);
    res.render('index',{tasks});
  })
  
});

router.post('/add-task',(req,res) =>{
  taskHelpers.addTask(req.body)
  res.redirect('/')
})

router.get('/delete-task/:id',(req,res) =>{
  taskHelpers.deleteTask(req.params.id)
  res.redirect('/')

})


module.exports = router;
