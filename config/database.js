const Pool = require("pg").Pool;

const pool = new Pool({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"Root-1234",
    database:"todo_db"
});

module.exports = pool;

/*pool.query('Select * from todos_t',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message)
    }
    pool.end;
});*/