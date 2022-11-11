const db = require('../config/database');

class Todo{
 
    //select all
    static async get() {
        try {
            const tdo = await db.query("SELECT * FROM todos_t");
            return tdo.rows;
           
        } catch (error) {
            console.error(error.message);
        }
    }

   //Select by id
   static async selectById(id)
   {
       try {
           await db.query("SELECT * FROM todos_t WHERE id = $1",[id]);     
       } catch (error) {
           console.error(error.message);
       }
   }

    //create | insertion
    static async create(title, description) {
        try {
          await db.query("INSERT INTO todos_t (title, description) VALUES($1, $2) RETURNING *", [title, description]);  
        } catch (error) {
            console.error(error.message);
        }
    }

    //delete
    static async delete(id) {
        try {
          await db.query("DELETE FROM todos_t WHERE id= $1 RETURNING *",[id]);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    //update
    static async update(title,description,id){
        try {
            await db.query("UPDATE todos_t SET title = $1, description = $2 WHERE id = $3",[title, description, id]);
        } catch (error) {
            console.error(error.message);
        }
    }
}

module.exports = Todo;
