function errorHandling(err,req,res,next){
    if(err){
        const status=err.status || 500;
        res.status(status).json(
     {
        status:status,
        err :"An error occured."
    }
        )
    }
    next();
    }
    module.exports={errorHandling};