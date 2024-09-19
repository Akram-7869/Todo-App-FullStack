const express=require('express');
const app=express();
const cors=require("cors");

const { createTodo, updataTodo } = require('./types');
const {todo}=require("./models");
require('dotenv').config();
app.use(express.json());
app.use(cors());


const PORT=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("hi there");
})

app.get('/getTodo',async (req,res)=>{
    const response=await todo.find({});
    res.status(200).json({
        msg:response
    })
})

app.post('/addTodo',async (req,res)=>{
    try{
        const data=req.body;
        const checkparse=createTodo.safeParse(data);

        if(!checkparse.success)
        {
            return res.status(411).json({
                msg:"fields are requried "
            })
        }
        // TodoSchema
        
        const response=await todo.create(
            {
                title:data.title,
                description:data.title,
                completed:false,
                
            }
        )
    
        return res.status(200).json({
            msg:"added successfully"
        })
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"cannot add the data "
        })
    }

})

app.put('/updateTodo',async(req,res)=>{
    try{
        const data=req.body;
        const checkparse=updataTodo.safeParse(data);
        if(!checkparse.success)
            {
                return res.status(411).json({
                    msg:"fields are requried "
                })
            }
        const response=await todo.update({
            _id:req.body.id,
        },{completed:true})
        
        res.json({
            msh:"updated succesfully"
        })
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"cannot update the data "
        })
    }
    
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})