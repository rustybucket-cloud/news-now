import { Handler } from "@netlify/functions";
import axios from "axios"
require('dotenv').config()

const getApiData = async () => {
   const res =  await axios({
       url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`,
       method: 'GET'
   })
   return res;
}

exports.handler = async () => {
    const data = await getApiData()
    return { 
        statusCode: 200,
        body: data
    }
}