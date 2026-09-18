import express from 'express'

const app = express()

const port = 3000

app.use(express.json())


app.post('/user/:id', (req,res)=>{

    console.log(req.url)          //to get the url

    console.log(req.method)      //to get the method

    console.log(req.body)       //to get the body

    console.log(req.params)     //to get the params

    console.log(req.query)     //to get the query params

    console.log(req.headers)   // to get the headers







    // console.log('this is user logic')

    res.status(201)

    res.send('this main logic')

    // res.json({
    //     message:"this is user logic...."
    // })

})



app.listen(port, ()=>{
    console.log('server has started at port : ', port)
})