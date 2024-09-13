import express from "express";

// router object
const router = express.Router();

//routes
router.get('/',(req,res)=>{
    res.send("reached test API\n");
})


//export 
export default router;