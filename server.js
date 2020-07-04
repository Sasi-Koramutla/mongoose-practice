const mongoose = require("mongoose");
const tweet = require("./tweet.js");

//global configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'tweets';
const db = mongoose.connection;

//connect to mongoose
mongoose.connect(   mongoURI,

                    {
                    useFindAndModify: false,
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                    },

                    () => {console.log('the connection with mongod is established');}
                );

  // Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(() => {db.close();}, 5000);