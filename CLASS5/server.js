import express from 'express';

const app = express()

const port = 3000

app.use(express.json())        // to parse the incoming request body as JSON


app.post('/user/:id', (req,res)=>{

    console.log(req.url) // to get the url of the request

    console.log(req.method). // to get the method of the request

    // console.log(req.body[0])
    // console.log(req.body[1])

    console.log(req.params)  // to get the params of the request

    console.log(req.query)   // to get the query of the request  

    console.log(req.headers) // to get the headers of the request







    // console.log('this is user logic')

    res.status(201)     // to set the status code of the response

    res.send('this main logic')      // to send the response to the client

    // res.json({
    //     message:"this is user logic...."
    // })

})



app.listen(port, ()=>{
    console.log('server has started at port : ', port)      // to start the server and listen on the specified port
})



