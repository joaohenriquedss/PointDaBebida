const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes')
const categoryRoute = require('./routes/categoryRoutes')
const productRoute = require('./routes/productRoutes')
const path = require("path")

// inicializar app express
const app = express();
var cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/pointdabebida',{
  useNewUrlParser: true
})

app.use(express.json())

app.use(cors()) //Essa linha aqui

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/user', userRoute)
app.use('/category', categoryRoute)
app.use('/product', productRoute)
app.use('/uploads', express.static(path.resolve(__dirname,'uploads')));
console.log(path.resolve('uploads'))

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto ' + porto);
});

