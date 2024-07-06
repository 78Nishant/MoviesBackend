const model=require('../model/series');
const Serie=model.Serie;

exports.getProduct=async(req,res)=>{
    const serie=await Serie.find();
    res.status(200).json(serie)
}