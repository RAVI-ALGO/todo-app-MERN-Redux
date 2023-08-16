const todoModel = require('../Model/todo')

exports.postAddtodo = async(req,res)=>{
    console.log(req.body);
   await todoModel.insertMany({todo:req.body.todo}).then(() =>{
    res.send({todo:req.body.todo, message:"Todo inserted", done:false})
  })
  .catch((err) =>{
    console.log(err); // Failure
   
  });
   
}


exports.getAlltodo = async(req,res)=>{
  try{
    const todo = await todoModel.find().sort({'caeatedAt':-1})
    return res.json({status:"success",data:todo})
  }
 catch(error){
  console.log(error)
 }

 
}
exports.toggletodo = async(req,res)=>{
  try{
    const todoRef = await todoModel.findById({_id:req.params.id})

    const todo = await todoModel.findOneAndUpdate({_id:req.params.id},{done:!todoRef.done})
    return res.json({status:"status changed",data:todo})
  }
 catch(error){
  console.log(error)
 }

 
}

exports.deletetodo = async(req,res)=>{
  try{
   const todo = await todoModel.findByIdAndDelete(req.params.id)
    return res.json({status:"Todo Deleted",data:todo})
  }
 catch(error){
  console.log(error)
 }

 
}
