const URLScheme = require("../models/task")

const createUrl = async (req,res) =>{
 
    const {oldUrl} = req.body;

   
        
    
        try{
            const existence = await URLScheme.exists({oldUrl})
            
            const all = await URLScheme.find({})
            if(existence){
            res.status(300).json({msg:"this resource already exists"})
            }

            else{   
            const task = await URLScheme.create(req.body)
            res.status(201).json({task})
            }
        }
        
            catch (error){
            res.status(500).json({msg:error})
            }
    }
   // we want to see if the url exists, and if it does, redirect
   // if it doesnt exist, return an error saying it doesnt exist.
const getUrl = async (id, req, res) => {
    try {
        const existence = await URLScheme.exists({ newUrl: id });
        
        if (existence) {
            const redirectUrl = await URLScheme.findOne({ newUrl: id });
            res.status(301).redirect(redirectUrl.oldUrl)





        } else {
            res.status(404).json("Not found: " + id);
        }
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    createUrl, getUrl
}