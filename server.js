import express from 'express'

const app = express()

const port = 3000

app.use(express.json())


app.post('/user/:id', (req,res)=>{

    console.log(req.url)

    console.log(req.method)

    console.log(req.body)

    console.log(req.params)

    console.log(req.query)

    console.log(req.headers)







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