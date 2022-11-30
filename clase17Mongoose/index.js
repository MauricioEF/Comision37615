import mongoose from 'mongoose';
import studentsModel from './models/Student.js';

const URL = 'mongodb://127.0.0.1:27017/colegio';
const connection = mongoose.connect(URL, (error) => {
    if (error) console.log("Hubo un error: " + error);
    else console.log("Conectado a monguito")
})
const studentsToInsert = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
]

const CRUD = async () => {

    //INSERT MANY
    // let insertResult = await studentsModel.insertMany(studentsToInsert)
    // console.log(insertResult);

    //INSERT ONE
    //  const newStudent = { nombre: 'Carlos Mauricio',apellido: 'Fabris', edad: 22, dni:'4222565412',curso:"1A", nota:10}
    //  let insertResult = await  studentsModel.create(newStudent);
    // console.log(insertResult);

    //FIND
    // let students = await studentsModel.find();
    // console.log(students);


    // //UPDATE
    // let result  = await studentsModel.updateOne({dni:'37923460'},{$set:{password:"12345"}})
    // console.log(result);

    //DELETE
    // let result = await studentsModel.deleteOne({ dni: '38654790' })
    // console.log(result);

    // a)
    // let result = await studentsModel.find().sort({nombre:1})
    // console.log(result);

    //b)
    //Aggregation - Cada paso es un objeto
    // let result = await studentsModel.aggregate([
    //     {$group:{_id:"$edad",students:{$push:"$$ROOT"}}},
    //     {$sort:{_id:1}},
    //     {$limit:1},
    //     {$project:{students:1,_id:0}}
    // ])
    // console.log(result[0]);

    //c)
    // let students = await studentsModel.find({curso:"2A"});
    // console.log(students);

    //d)
    //     let result = await studentsModel.aggregate([
    //     {$group:{_id:"$edad",students:{$push:"$$ROOT"}}},
    //     {$sort:{_id:1}},
    //     {$skip:1},
    //     {$limit:1},
    //     {$project:{students:1,_id:0}}
    // ])
    // console.log(result[0]);


    //e)
    // let students = await studentsModel.find({},{nombre:1,apellido:1,curso:1}).sort({apellido:-1})
    // console.log(students);

    //f)
    // let students = await studentsModel.find({nota:10})
    // console.log(students);

    //g)
    // let students = await studentsModel.aggregate([
    //     {
    //         $group: {_id:"Total de alumnos", promedio:{$avg:"$nota"}}
    //     }
    // ])
    // console.log(students);

    //h)
    // let students = await studentsModel.aggregate([
    //     {$match:{curso:"1A"}},
    //     {$group: { _id: "Promedio de 1A", promedio: { $avg: "$nota" } }}
    // ])
    // console.log(students);

    //1) 
    // let result = await studentsModel.updateOne({$and:[{nombre:"Lucas"},{apellido:"Blanco"}]},{$set:{dni:'20355875'}})
    // console.log(result);

    //2)
    // let result = await studentsModel.updateMany({},{$set:{ingreso:false}})
    // console.log(result);

    //3)
    // let result = await studentsModel.updateMany({curso:"1A"},{$set:{ingreso:true}});
    // console.log(result);
    
    //4)
    // let result = await studentsModel.find({nota:{$gte:4}},{_id:0,__v:0})
    // console.log(result);

    //5)
    // let result = await studentsModel.find({ingreso:true},{_id:0,__v:0})
    // console.log(result);

    //6)
    // let result = await studentsModel.deleteMany({ingreso:true})
    // console.log(result);

    mongoose.connection.close();
}

CRUD();

