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
[MongoDB](https://www.mongodb.com/docs/) [NodeJS](https://nodejs.org/en/docs) [ExpressJS](https://expressjs.com/en/guide/database-integration.html) [Passport](https://www.passportjs.org/concepts/authentication/middleware/) [Multer](https://github.com/expressjs/multer) [Mapbox](https://docs.mapbox.com/mapbox-gl-js/guides/) [Cloudinary](https://cloudinary.com/documentation/node_integration) 

# Packages Used
`express` `nodemon` `mapbox` `cloudinary` `ejs` `ejs-mate` `helmet` `joi` `sanitize-html` `multer` `method-override` `mongoose` `passport` `express-session` `connect-flash` `connect-mongo` `dotenv`
# Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_KEY`

`CLOUDINARY_SECRET`

`MAPBOX_TOKEN`

`DB_URL`

# Features
  ### **Frontend:**
To build the front end, I have used HTML,CSS that help make the user interface look good and responsive. Additionally, I have used some npm packages to add extra functionality to the front end making it dynamic.
It consists of :-
* Homepage
* View campgrounds
* Register
* Login
### **Backend:**
The backend of this website provides a range of features and functionalities, such as:-
* User authentication and authorization : Users can register and login to their account using email and password. This has been achieved using passport.
* Map: With the help of mapbox you can see the location of the camping ground.
* Image Uploading : Authorized Users can upload images which is acheieved with the help of multer and cloudinary.
* Reviews,Comments: Users can give reviews and ratings to the camping sites.
* Adding a campground : Only an Author of that campground is authorized to update the details of campgrounds.

# Demo
### Screenshots
* HomePage
  ![Homepagegocamp](https://github.com/AnshulMinare/GoCamp/assets/98635847/710dd4f8-6df1-48ef-99f0-ad38239a5e75)

* Login
  ![loginpage](https://github.com/AnshulMinare/GoCamp/assets/98635847/7d8d7263-437f-4a6c-a559-2263bab32fb3)
* Register
  ![registerpage](https://github.com/AnshulMinare/GoCamp/assets/98635847/aa7d3a09-4ad6-4651-a7a0-8932d03e824a)
* List of Campgrounds
  ![viewcampgrounds](https://github.com/AnshulMinare/GoCamp/assets/98635847/0f99c1ba-c775-4ff3-a464-008dce170e7a)
* New Campground(Image Uploading)
  ![imageupload](https://github.com/AnshulMinare/GoCamp/assets/98635847/910d4772-7062-4c32-bf80-2f8839a26668)

# Lessons Learnt
* Desgin of Schemas / Models.
* MongoDB connection with backend Using Mongoose.
* Integrating third-party services like Mapbox,Cloudinary.
* Using Passport and Middlewares for Authentication and Authorization.
* Using Multer and Cloudinary for image uploading.
* Thorough testing and bug fixing.

# Deployment
The website is deployed on render.
The link for the website is this :- [GoCamp](https://go-camp-cfc8.onrender.com/)
