


// save image to database
const uploadimage = (req,res)=> {
    res.status(200).send(`i'm from server - image upload is working fine`)
}

// get image from database
const retriveimage = (req,res)=> {
    res.status(200).send(`i'm from server - image retrive is working fine`)
}


module.exports = {
    uploadimage,
    retriveimage
}