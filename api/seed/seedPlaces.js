const mongoose = require("mongoose");
const Place = require("./../models/Place"); // Adjust the path as needed
const connectWithDB = require("../config/db");
const { faker } = require('@faker-js/faker');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await connectWithDB()

    // Clear existing data
    await Place.deleteMany();
    console.log("Existing data cleared.");

    // Dummy data
    const places = []

    for (let i = 0 ; i<=100 ; i++){
      const photos = [

      ]
      for( let i = 0 ; i< 5 ; i++){
        photos.push(faker.image.url())
      }
      const currentData = {
        owner: new mongoose.Types.ObjectId(),
        title:faker.address.city(),
        address:faker.address.cardinalDirection(),
        photos:photos,
        perks:faker.vehicle.bicycle() ,
        maxGuests: Math.floor(Math.random()) * 10,
        price:Math.floor(Math.random()) * 100,
        description:faker.lorem.paragraph()
      }
      console.log(currentData)
      // break;
      places.push(currentData)

    }
    
      

    // Insert dummy data
    await Place.insertMany(places);
    console.log("Dummy data inserted successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

// Run the script
seedDatabase();
