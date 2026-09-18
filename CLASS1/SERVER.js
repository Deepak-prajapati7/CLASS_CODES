// import { sum, divide, multiply, subtract, square } from './math.js';
// console.log(sum(5, 10));
// console.log(divide(10, 2));
// console.log(multiply(5, 10));
// console.log(subtract(10, 5));
// console.log(square(5));






//import os from 'os';
// console.log(os.type()); // Returns the operating system name
// if (os.type() === 'Windows_NT') {
//     console.log('Running on Windows');
// } else if (os.type() === 'Darwin') {
//     console.log('Running on macOS');
// } 


// console.log(os.platform()); Returns the operating system platform (e.g., 'win32', 'darwin', 'linux')

// console.log(os.arch()); Returns the CPU architecture (e.g., 'x64', 'arm', 'ia32')


// console.log(os.cpus()); Returns an array of objects containing information about each CPU/core installed


// console.log(os.totalmem()/1024 / 1024 / 1024); Returns the total amount of system memory in bytes
//1024 divide by 1024 divide by 1024 to get GB

//console.log(os.freemem()/1024/1024/1024); Returns the amount of free system memory in bytes
//1024 divide by 1024 divide by 1024 to get GB









// import path from 'path';

// console.log(path.basename('./parent/child.js')); // Returns the last portion of a path (e.g., 'child.js')


// console.log(path.extname('./parent/child.js'));// Returns the file extension of a path (e.g., '.js')

// console.log(path.dirname('./parent/child.js')); // Returns the directory name of a path (e.g., './parent')




// import DNS from 'dns';

// console.log(DNS.lookup('www.google.com', (err, address, family) => { // gives the IP address of the domain name
//     console.log('Address:', address);
// }));


// console.log(DNS.reverse('163.70.146.35', (err, domain) => { // gives the domain name of the IP address  
//     console.log(domain);
// }));


