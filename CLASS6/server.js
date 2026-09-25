import express from 'express';
const app = express();

app.use(express.static('public')// to live the server on same port 
)
app.use(express.json());  // Middleware to parse JSON request bodies built in middleware
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
const port = 3000;



app.post(port, () => {
  console.log(req.body) = {name:'ankit'};
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});