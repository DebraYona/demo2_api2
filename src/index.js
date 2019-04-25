const express = require('express')
const app = express()





//Settings
app.set('port', process.env.PORT || 3000 )

//Middleware



app.listen(3000, ()=> {
    console.log('server on port 3000')
})