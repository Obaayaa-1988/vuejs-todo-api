
 const express = require('express');
 
 const router = express.Router();
 const {
     addTask,
     fetchTask,
     fetchTasks,
     deleteTask,
     updateTask,

 } = require('../controller/taskController')
 




router.post('/api/task', addTask)

router.get('/api/task', fetchTasks)
router.get('/api/task/:id', fetchTask)
router.delete('/api/task/:id', deleteTask)
router.put('/api/task/:id', updateTask)





 module.exports = router;