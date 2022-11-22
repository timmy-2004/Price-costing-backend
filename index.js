
const express = require('express');


// Routes
//  const itemRouter = require('./src/routes/item.routes')
 const priceRouter = require('./src/routes/price.routes')
// const marketRoute = require('./routes/market');
// const authRoute = require('./routes/auth')



const app = express();
const PORT = 6000;

require('./src/config/database')


  
app.use(express.json())
app.use(express.urlencoded());



    

// Middle ware      
app.get("/",(request, response) => {
    response.status(200).send("welcome to price-costing "),
    next()
})




// app.use( '/api/item', itemRouter)
app.use( '/api/price',priceRouter)
// app.use( '/api/market',marketRoute)
// app.use( '/api/auth',authRoute)



app.listen(PORT, () => console.log(`Running Express on Port ${PORT}!`));





