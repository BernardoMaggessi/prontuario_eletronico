import mongoose from "mongoose";//mongoose é utitilizado para interagir com o MongoDB

mongoose.connect('mongodb://localhost:27017/medi-app')
const db = mongoose.connection;

db.on('error', console.error.bind(console,'conection error: '));

db.once(
    'open', function(){
        console.log('Database connected Successfully!')
    }
);

export default db;