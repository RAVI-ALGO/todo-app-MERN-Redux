const mongoose = require('mongoose')

const TodoSchema =  new mongoose.Schema({
    todo:{
        type:String,
        require:true
    },
    done:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }

})

const todoModel = mongoose.model('todo-list',TodoSchema)

module.exports = todoModel;