 
// import mongoose from "mongoose";

// const CakeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     mainImage: { type:  String, required: true }, // Main image filename
//     addImage1:{type: String, required: true},
//     addImage2:{type: String, required: true},
//     category: { type: String, required: true },

//       // additionalImages: [{ type: String }], // Array of additional image filenames
// });

// const CakeModel = mongoose.models.cake || mongoose.model("cake", CakeSchema);

// export default CakeModel;


import mongoose from "mongoose";

const CakeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    mainImage: { type: String }, // URL for the main image
    addImage1: { type: String }, // URL for additional image 1
    addImage2: { type: String }, // URL for additional image 2
});

const CakeModel = mongoose.model("Cake", CakeSchema);

export default CakeModel;