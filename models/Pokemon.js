const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")
const PokemonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:["Normal", "Fire", "Water", "Grass", "Flying", "Fighting", "Poison", "Electric", "Ground", "Rock",
        "Psychic", "Ice", "Bug", "Ghost", "Steel","Dragon", "Dark" ,"Fairy"],
        required:true,
    },
    height:{
        type:Number,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    evolution:{
        type:String,
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

PokemonSchema.plugin(mongoosePaginate)
mongoose.model("Pokemon",PokemonSchema)