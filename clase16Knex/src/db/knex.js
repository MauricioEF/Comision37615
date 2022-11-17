import knex from "knex";
 const mysqlOptions ={
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'baseknex'
    }
}

const sqliteOptions = {
    client:'sqlite3',
    connection:{
        filename:'./sqliteDatabase.sqlite'
    },
    useNullAsDefault:true
}
const db = knex(sqliteOptions)

try{
    let exists = await db.schema.hasTable('users');
    if(!exists){
        await db.schema.createTable('users',table =>{
            table.primary('id');
            table.increments('id');
            // id INT AUTO_INCREMENT, PRIMARY KEY(id);
            table.string('first_name',35).nullable(false);
            table.string('last_name',20).nullable(false);
            table.string('email',25).nullable(false);
            table.integer('age');
            table.string('gender',15);
        })
    }
    // let exists = await db.schema.hasTable('products');
    // if(!exists) {
    //     await db.schema.createTable('products',table =>{
    //         table.primary('id');
    //         table.increments('id');
    //         table.string('title',30).nullable(false);
    //         table.string('description',100);
    //         table.integer('stock').defaultTo(0);
    //         table.string('code',10).unique(true);
    //     })
    // }
}
catch(error){
    console.log(error)
}

export default db;