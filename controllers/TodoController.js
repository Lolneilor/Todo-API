const Todo = require('../models/Todo');

exports.get = async (req, res) => {

    const tdos = await Todo.get();
    res.status(200).json(tdos);
}

exports.selectById = async(req,res) =>{
    const id = parseInt(req.params.id);
    const r = await Todo.selectById(id);
    res.status(200).json(r);       
}

exports.create = async (req, res) => {

 const { title, description } = req.body;

   await Todo.create(title, description);    

   res.status(201).send();
}

exports.delete = async (req,res)=>{
    await Todo.delete(parseInt(req.params.id)).then(
        (todo)=>{
            res.send(todo);
        }).catch((error)=>res.send(error.message))
}

exports.update = async(req,res)=>{
    const id = parseInt(req.params.id)
    const { title, description } = req.body
    await Todo.update(title,description,id)
    res.status(200).send(`User modified with ID: ${id}`)
}
