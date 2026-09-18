// import http from 'http';

// const server = http.createServer((req,res)=>{          //to create a server
//    if (req.url === '/' && req.method === 'GET'){                                     //to check the url and method
//          res.end('<h1> Hello World</h1> ');                                          //to send the response
//    }else if(req.url === '/about' && req.method === 'GET'){                           //to check the url and method
//          res.end('<h1> About Page</h1> ');                                           //to send the response
//    }else if(req.url === '/contact' && req.method === 'GET'){                         //to check the url and method
//          res.end(JSON.stringify({
//             message :"this is contact page",
//             sucess : true
//          }));                                                           //to send the response
//    }else{
//          res.end('<h1> Page Not Found</h1> ');                         //to send the response
//    }
// });

// let body = '';
// if (req.url === "/user" && req.method === "POST") {
//     res.on('data', (chunk) => {       // data come in chunk and we have to listen the data in chunk
//         body = body + chunk
//     })
//     res.on('end', () => {     // when data is end
//         body = JSON.parse(body);
//         res.writeHead(200, { 'Content-Type': 'application/json' }); // to sedn response to frontend that backend logic is working fine and data is successfully created
//         res.end(JSON.stringify({
//             message: "data succcefulyy created",
//             sucess: true,
//             body
//         }));
//     })
// }

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/calculate" && req.method === "POST") {
    res.end("add");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server is running on port at ", PORT); //to listen the server on port 3000
});

console.log(process.argv); // to get the command line argument from terminal

let operation = process.argv[2]; // to get the operation from command line argument
let num1 = Number(process.argv[3]); // to get the first number from command line argument
let num2 = Number(process.argv[4]); // to get the second number from command line argument

if (operation === "add") {
  // to check the operation is add or not
  console.log(num1 + num2); // to add the two numbers
} else if (operation === "sub") {
  // to check the operation is sub or not
  console.log(num1 - num2); // to subtract the two numbers
} else if (operation === "mul") {
  // to check the operation is mul or not
  console.log(num1 * num2); // to multiply the two numbers
} else if (operation === "div") {
  // to check the operation is div or not
  console.log(num1 / num2); // to divide the two numbers
} else {
  console.log("Invalid Operation"); // to print invalid operation if operation is not valid
}
