const axios = require("axios")
require('dotenv').config()

const getApiData = async () => {
   const res =  await axios({
       url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`,
       method: 'GET'
   })
   return res.data.articles;
}

exports.handler = async () => {
    const data = await getApiData()
    return { 
        statusCode: 200,
        body: JSON.stringify(data)
    }
}