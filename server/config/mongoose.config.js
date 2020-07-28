const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Database connection established"))
.catch(()=> console.log("There was an error",(err)))