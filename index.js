
const express = require('express');
const bodyParser = require('body-parser');


// Routes
const itemRouter = require('./src/routes/item.routes')
 const priceRouter = require('./src/routes/price.routes')
const userRouter = require('./src/routes/user.routes')

const app = express();
const PORT = 6000;

require('./src/config/database')


  
app.use(express.json())
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



    

// Middle ware      
app.get("/",(request, response) => {
    response.status(200).send("welcome to price-costing "),
    next()
})




app.use( '/api/items', itemRouter)
app.use( '/api/price',priceRouter)

app.use( '/api/user', userRouter)

app.listen(PORT, () => console.log(`Running Express on Port ${PORT}!`));





