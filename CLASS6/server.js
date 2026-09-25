import express from "express";
const app = express();

// app.use(
//   express.static("public"), // to live the index.html file in the public folder
// );
//app.use(express.json());  // Middleware to parse JSON request bodies built in middleware
//app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

const port = 3000;

function middleware1(req, res, next) {
  console.log("Middleware 1 executed");
  next(); // Call the next middleware or route handler
}

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

//app.use(logger); // Apply the logger middleware to all routes

//app.use(middleware1); // App.use middleware1 for all routes for  
app.get("/user", middleware1,logger,(req, res) => {
  //   console.log(req.body);
  //   res.send("Data received successfully");
  console.log("this is function page");
  res.send("this is logic function");
});


app.get('/about', (req, res) => {
  console.log('This is the about page');
  res.send('This is the about page');
});






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
