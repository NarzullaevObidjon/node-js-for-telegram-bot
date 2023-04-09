const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get("/vacancies",(req,res)=>{
    const vacancies = {};
    axios.get('https://ishapi.mehnat.uz/api/v1/vacancies?page=1&per_page=1').then((data)=>{
        
    })
})

module.exports = router