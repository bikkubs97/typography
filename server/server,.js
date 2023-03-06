import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

import {  Configuration, OpenAIApi } from 'openai'
 
const configuration = new Configuration ({
    apiKey : process.env.OPENAI
})

const openai = new OpenAIApi(configuration)


const app = express()

app.use(cors())

app.use(express.json())


app.post('/imagine', async (req,res)=>{

    const loadFinished=false
    
    const prompt = req.body.prompt

    const aiResponse = await openai.createImage({
        prompt, 
        n:1,
        size:'1024x1024',


    }
    )


   const image = aiResponse.data.data[0].url
   loadFinished == true
   res.send({image})



})


app.listen(3000,()=>{
    console.log('app is listening')} )