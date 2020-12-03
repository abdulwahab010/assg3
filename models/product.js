var mongoose = require("mongoose");
var productschema = mongoose.Schema({
    productname:String,
    price:Number,
    sizes:String,
    colour: String,
});
const productmodel = mongoose.model("products",productschema);

module.exports=productmodel;