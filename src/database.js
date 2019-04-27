const mongoose = require('mongoose')

const URI= 'mongodb://localhost/info'

mongoose.connect(URI)
    .then(db =>console.log("DB is conncted"))
    .catch(err => console.error(err))

    module.exports = mongoose