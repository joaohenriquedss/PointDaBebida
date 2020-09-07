const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes')
const categoryRoute = require('./routes/categoryRoutes')
const productRoute = require('./routes/productRoutes')

// inicializar app express
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/pointdabebida',{
  useNewUrlParser: true
})

app.use(express.json())
app.use('/user', userRoute)
app.use('/category', categoryRoute)
app.use('/product', productRoute)

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto ' + porto);
});
