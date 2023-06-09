const express = require("express");
const router = express.Router();
const axios = require('axios');
const path = require('path');
const https = require('https');
const rootCas = require('ssl-root-cas').create();

rootCas.addFile(path.resolve('cer','intermediate.pem'));
const httpsAgent = new https.Agent({ca: rootCas});

router.get("/andijon",(req,res)=>{
    axios.get('https://ishapi.mehnat.uz/api/v1/vacancies?page=1&per_page=&20sort_key=created_at&company_soato_code=1703',{ httpsAgent })
    .then(function (response) {
        res.send(response.data);
      });
})
module.exports = router