const TaskModel = require('../model/taskModel');

const mongoose = require('mongoose');


//saving or adding a todo to the mongodb server /database

 const addTask =  (req, res) => {

      const { task, completed } = req.body;

      const dataTask = {
          task,
         completed
      }

      const dataToStore = new TaskModel(dataTask)
      dataToStore.save().then(results => {
          if(results) res.send(results)
      }).catch(err => {
         console.log(err)
      })

 }




//fetching all todos or task from the database or mongodb server
const fetchTasks = (req, res) => {
    TaskModel.find().then(results => {
        res.send(results)
    }).catch(err => {
        console.log(err.message)
    })
}

//fetching only one particular todo from the database or mongodb server

const fetchTask = (req, res) => {
    TaskModel.findById(req.params.id).then(result => {
        if (result) {
            res.send(result)
        }
    }).catch(err => console.log(err))
}

//deleting a particular todo using it id
const deleteTask = (req, res) => {
    TaskModel.findByIdAndDelete(req.params.id).then(result => {
        res.send(result)
    }).catch(err => {
        console.log(err)
    })
}

//updating a particular todo using it unique id
const updateTask = (req, res) => {

    const { completed } = req.body;

    const dataTask = {
        completed
    };
    TaskModel.updateOne({ _id: req.params.id }, dataTodo)
        .then((results) => {
            res.send(results)
        }).catch((err) => {
            console.log({ message: "task updated successfully" })
        })


}






module.exports = {
    addTask,
    fetchTasks,
    fetchTask,
    deleteTask,
    updateTask,



}