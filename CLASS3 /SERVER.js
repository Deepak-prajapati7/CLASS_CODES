// import express from "express";
// const app = express(); // Create an instance of the Express application

// // app.get("/", (req, res) => {
// //   // Define a route for the root URL ("/") that responds to GET requests
// //   res.send("<h1>hello world</h1>"); // Send a response with the text "Hello World"
// // });

// // app.get("/about", (req, res) => { // Define a route for the "/about" URL that responds to GET requests
// //   res.send("<h1>About Page</h1>"); // Send a response with the text "About Page"
// // });
 
// // app.get("/contact", (req, res) => { // Define a route for the "/contact" URL that responds to GET requests
// //   res.send("<h1>Contact Page</h1>"); // Send a response with the text "Contact Page"
// // });

// let users = ["Ankit", "Rohit", "Saurabh", "Ramesh", "Suresh"]; // Define an array of user names
 

// app.listen(3000, () => {
//   console.log(`Server is running on port 3000`);
// });


import express from 'express';

const app = express(); // initializing the object

app.use(express.json()) // this is the middle ware

let users = ['Jasmine', 'Babuu', 'Rehman', 'deepak']; // data array

app.get('/', (req, res)=>{
    res.send("Welcome to express server...")
})

// sending data 
app.get('/users', (req, res) => {
    res.status(200).json({
        message:'data set Successfully...',
        success:true,
        users: users
    })
})

// creating a user
app.post('/createuser', (req, res)=>{
    let name = req.body.name;

    if (!name){
        return res.status(404).json({
            message: 'Name not found',
            success: false
        })
    }

    users.push(name)

    res.status(200).json({
        message:'user created successfully',
        success: true,
        users: users
    })

})

// updating the user
app.put('/updateuser', (req, res)=>{
    
    let {name, newName} = req.body; // using destructuring to get the name and new name

    // checking for the availability of data
    if (!name || !newName) {
        return res.status(404).json({
            message: 'Data not found for update...',
            success: false
        });
    }

    let index = users.indexOf(name); // getting the index of old name

    users[index] = newName; // updating the name

    res.status(200).json({
        message: "Data udpated successfully...",
        success: true,
        users: users
    })
})

// to delete
app.delete('/deleteuser', (req, res) => {
    let {name} = req.body; // fetching the name

    let index = users.indexOf(name); // getting the index 

    // failsafe check
    if (!index) {
        return res.status(403).json({
            message: 'name not found...',
            success: false
        })
    }

    users.splice(index, 1); // deleting the name

    res.status(200).json({
        message : "user deleted...",
        success: true,
        users: users
    })
})

app.listen(4000, ()=>{
    console.log("Server has started...")
})




