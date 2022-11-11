const express = require('express');
const TodoController = require('./controllers/TodoController')

const app = express();

const port = 8081;

app.use(express.json());

app.get('/todos', TodoController.get)

app.get('/todos/:id', TodoController.selectById)

app.post('/todos', TodoController.create)

app.delete('/todos/:id',TodoController.delete)

app.put('/todos/:id',TodoController.update)


app.listen(port,function(){
    console.log("Servidor rodando na url:http://localhost:8081/todos");
})