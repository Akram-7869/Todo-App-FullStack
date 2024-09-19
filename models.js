const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://miravanisri123:fqxiFwilePAXKofA@cluster0.i1m82nu.mongodb.net/todo")
const TodoSchema=mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    completed:Boolean
})

const todo=mongoose.model('TodoSchema',TodoSchema);

module.exports={todo};