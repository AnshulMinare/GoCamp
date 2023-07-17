require('dotenv').config();

const mongoose = require('mongoose');
const cities = require('country-state-city').City.getCitiesOfCountry("IN");
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const randomInt = Math.floor(Math.random() * cities.length);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '64b3758532d9c643f1a76960',
            location: `${cities[randomInt].name}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[randomInt].longitude,
                    cities[randomInt].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ahfnenvca4tha00h2ubt.png',
                    filename: 'YelpCamp/ahfnenvca4tha00h2ubt'
                },

// const mongoose = require('mongoose');
// const cities = require('./cities');
// const { places, descriptors } = require('./seedHelpers');
// const Campground = require('../models/campground');
// const dbURL =  process.env.DB_URL||'mongodb://127.0.0.1:27017/yelp-camp'

// mongoose.connect(dbURL);
// // ||'mongodb://127.0.0.1:27017/yelp-camp'




// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 40; i++) {
//         const random1000 = Math.floor(Math.random() * 20);
//         const price = Math.floor(Math.random() * 700) + 40;
//         const camp = new Campground({
//             author: '64b3758532d9c643f1a76960',
//             // author: '6490460a06a91bc2939a2858',
//             location: `${cities[i].city}, ${cities[i].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`,
//             description: 'A very nice area must visit at an affordable price',
//             price,
//             geometry: {
//                 type: "Point",
//                 coordinates: [
//                     cities[i].longitude,
//                     cities[i].latitude,
//                 ]
//             },
//             images: [
//                 {
//                     url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ahfnenvca4tha00h2ubt.png',
//                     filename: 'YelpCamp/ahfnenvca4tha00h2ubt'
//                 },
//                 {
//                     url: 'https://res.cloudinary.com/douqbebwk/image/upload/v1600060601/YelpCamp/ruyoaxgf72nzpi4y6cdi.png',
//                     filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi'
//                 }
//             ]
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })