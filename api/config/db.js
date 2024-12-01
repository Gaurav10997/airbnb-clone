const mongoose = require('mongoose');

const connectWithDB = () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URL, {
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
