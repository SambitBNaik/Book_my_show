const{
    AddMovie,
    getAllMovies,
    deletedMovies,
    updateMovies,
    getMovieById,
}= require("../Controller/movieController");

const {validateJWTToken}=require("../Middleware/authMiddleware");
const movieRouter= require("express").Router();

movieRouter.get("/getAllMovies",validateJWTToken, getAllMovies);
movieRouter.post("/addMovie",validateJWTToken,AddMovie);
movieRouter.post("/updateMovies",validateJWTToken,updateMovies);
movieRouter.post("/deleteMovie",validateJWTToken,deletedMovies);
movieRouter.get("/getMovieById/:id",validateJWTToken,getMovieById);

module.exports=movieRouter;