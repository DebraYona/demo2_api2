const express = require('express')
const morgan = require('morgan')
const path= require('path')
const app = express()

const {mongoose}= require('./database')




//Settings
app.set('port', process.env.PORT || 3000 )
//1app.set('views',path.join(__dirname, 'views'))

//Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/info',require('./routes/chofer.routes'))


app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`)
})