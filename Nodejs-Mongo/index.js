let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');
let app = express();

let apiRoutes = require("./routes/api-routes");
app.use(bodyParser.json());
app.use(cors())

// STEP 4: definire collegamento al db

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
   }
   
try {
  mongoose.connect('mongodb://mongo:27017/mydb',connectionOptions)
  console.log('Connected to MongoDB')
} catch (err) {
  console.log('Couldnt connect:', err);
}

var db = mongoose.connection;

if(!db)
    console.log("Error connecting to the database")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 8081;


// STEP 5: definire contesto (opzionale)
app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running webapp on port " + port);
});
