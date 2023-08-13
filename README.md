# GoCamp
I created a comprehensive website that showcases various campgrounds in India, along with reviews and pricing information. The site incorporates Mapbox and MongoDB to present a clustered map of these campgrounds. Additionally, Cloudinary is integrated for easy image uploading. User authentication is implemented to ensure that only authorized individuals can perform actions like adding, editing, or deleting campgrounds and comments, providing full CRUD capabilities. Furthermore, the web application is designed to be secure against common vulnerabilities like MongoDB injection and Cross Site Scripting (XSS).
# Roadmap
* Setting up the development environment.
* Creating the basic project structure and configuring NodeJS ,ExpressJS and MongoDB.
* Implementing user authentication and authorization using Passport and MORGAN(Middleware).
* Built the frontend pages for campgrounds.
* Implemented image uploading functionality using Cloudinary.
* Integrating Mapbox for clustering of campgrounds ,geocoding and pointing the locations of campgrounds on map.
* Adding additional features like reviews and ratings.
* Testing the application thoroughly and fixing any bugs or issues.
# Documentation 
[MongoDB](https://www.mongodb.com/docs/) [NodeJS](https://nodejs.org/en/docs) [ExpressJS](https://expressjs.com/en/guide/database-integration.html) [Passport](https://www.passportjs.org/concepts/authentication/middleware/) [MORGAN](https://expressjs.com/en/resources/middleware/morgan.html) [Mapbox](https://docs.mapbox.com/mapbox-gl-js/guides/) [Cloudinary](https://cloudinary.com/documentation/node_integration) 

# Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_KEY`

`CLOUDINARY_SECRET`

`MAPBOX_TOKEN`

`DB_URL`

# 
