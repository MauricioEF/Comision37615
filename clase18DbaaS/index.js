import admin from 'firebase-admin';
import firebaseConfig from './clavepapasconquesoychili.json' assert {type:'json'};
import fs from 'fs';


const FirebaseCRUD = async() =>{
    let firebaseConfig = await fs.promises.readFile('./clavepapasconquesoychili.json','utf-8');
    let config = JSON.parse(firebaseConfig);
    admin.initializeApp({
        credential:admin.credential.cert(config)
    })

    const db = admin.firestore();
    const users = db.collection('users');

    //CREAR UN USUARIO
    // let doc = users.doc();
    // await doc.create({name:"Carlos",email:"correoCarlos@correo.com",password:"123sadf3as"})

    //GET ALL
    // let snapShot = await users.get();
    // const docs = snapShot.docs;
    // const result = docs.map(doc=>({
    //     id:doc.id,
    //     name:doc.data().name
    // }))
    // console.log(result);

    //GET ONE
    // const id = 'v9TpsRaCR5Uu5UBndZPZ';
    // const doc = users.doc(id);
    // const item = await doc.get();
    // const user = item.data();
    // console.log(user);

    //UPDATE
    // const id = 'v9TpsRaCR5Uu5UBndZPZ';
    // const doc = users.doc(id);
    // let result = await doc.update({age:24})
    // console.log(result);
}

FirebaseCRUD();