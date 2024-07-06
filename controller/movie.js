const model=require('../model/movie');
const Movie=model.Movie;

exports.getProduct=async(req,res)=>{
    const movie=await Movie.find();
    res.status(200).json(movie)
}
exports.rankProduct=async(req,res)=>{
    const id=req.params.id;
    const movie=await Movie.find({rank : id});
    res.status(200).json(movie);
}
exports.nameProduct=async(req,res)=>{
    const name=req.params.name;
    const movie=await Movie.find({title : name});
    res.status(200).json(movie);
}