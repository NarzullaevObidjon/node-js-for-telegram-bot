const express = require("express");
const router = express.Router();

router.get("/vacancies",(req,res)=>{
    res.send("Here is vacancies")
})

module.exports = router