// const { Timestamp } = require('mongodb');

const mongoose = require('mongoose');
const { Schema } =  mongoose

const TaskSchema = new Schema ({

    task:{
        type: String,
    },

    completed:{
        type: Boolean,
        default: false

    },



}, {timestamps: true});

const Tasklist = mongoose.model("Tasklist", TaskSchema)

module.exports = Tasklist;