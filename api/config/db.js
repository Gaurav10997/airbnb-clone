const mongoose = require('mongoose');

async function connectWithDB(){
  mongoose.set('strictQuery', false);
  mongoose
    .connect('mongodb+srv://gaurav:gaurav@cluster0.qk5kz.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connected successfully');
    })
    .catch((err) => {
      console.error('DB connection failed', err);
      process.exit(1); // Exits the application on DB failure
    });
};


module.exports = connectWithDB;
