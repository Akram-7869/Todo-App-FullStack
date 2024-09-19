const z=require("zod");


const createTodo=z.object({
    title:z.string(),
    description:z.string()
});

const updataTodo=z.object({
    id:z.string()
});

module.exports={
    createTodo:createTodo,
    updataTodo:updataTodo,
}
