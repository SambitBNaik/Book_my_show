const movieModal= require("../Model/movieModal");

const AddMovie= async(req, res)=>{
    try{
        const newMovie= new movieModal(req.body);
        await newMovie.save();
        res.send({
            success: true,
            message:"Movie added Successfully",
        });
    } catch(err){
        res.send({
            success: false,
            message:err.message,
        });
    }
};

const getAllMovies= async(req, res)=>{
    try{
        const movies= await movieModal.find();
        res.send({
            success:true,
            message:"Moivie Fetched Successfully",
            data: movies,
        });
    } catch(err){
        res.send({
            success: false,
            message: err.message,
        });
    }
};

const deletedMovies= async(req, res)=>{
    try{
        await movieModal.findByIdAndDelete(req.body._id);
        res.send({
            success: true,
            message:"Movie Deleted Successfully",
        });
    }
    catch(err){
        res.send({
            success: false,
            message: err.message,
        })
    }
}

const updateMovies= async(req, res)=>{
    try{
        await movieModal.findByIdAndUpdate(req.body._id, req.body);
        res.send({
            success: true,
            message:"Movie updated Successfully",
        });
    }
    catch(err){
        res.send({
            success: false,
            message: err.message,
        });
    }
};


const getMovieById= async(req, res)=>{
    try{
        const movie=await movieModal.findById(req.params.id);
        res.send({
            success: true,
            message:"Movie Fetched Successfully",
            data: movie,
        });
    }
    catch(err){
        res.send({
            success: false,
            message:err.message,
        });
    }
};


module.exports={
    AddMovie,
    getAllMovies,
    deletedMovies,
    updateMovies,
    getMovieById,
}