const mongoose=require('mongoose');
const {Schema}=mongoose;

const seriesSchema=new Schema({
    rank:Number,
    title:String,
    description:String,
    image:String,
    big_image:String,
    genre:Array,
    thumbnail:String,
    rating:String,
    id:String,
    year:Number,
    imdbid:String,
    imdb_link:String
})

exports.Serie=mongoose.model('Serie',seriesSchema)
