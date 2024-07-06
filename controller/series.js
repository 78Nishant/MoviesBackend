const model=require('../model/series');
const Serie=model.Serie;

exports.getProduct=async(req,res)=>{
    const serie=await Serie.find();
    res.status(200).json(serie)
}
exports.rankProduct=async(req,res)=>{
    const id=req.params.id;
    const movie=await Serie.find({rank : id});
    res.status(200).json(movie);
}
