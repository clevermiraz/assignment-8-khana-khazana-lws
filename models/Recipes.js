import mongoose from "mongoose";

const RecipesSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Recipe",
        min: 2,
        max: 100,
    },
    description: {
        type: String,
        default: "",
    },
    author: {
        type: String,
        default: "Anonymous",
    },
    activeTime: {
        type: String,
        default: "",
    },
    totalTime: {
        type: String,
        default: "",
    },
    thumbnail: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    category: {
        type: String,
        default: "",
    },
    serves: {
        type: String,
        default: "",
    },
    rating: {
        type: Number,
        default: 0,
    },
    steps: {
        type: Array,
        default: [],
    },
});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", RecipesSchema);

export default Recipe;
