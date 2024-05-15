import Recipe from "@/models/Recipes";
import User from "@/models/Users";
import connectMongoDB from "./mongodb";

export async function getAllUsers() {
    await connectMongoDB();

    const users = await User.find();
    return users;
}

export async function getAllRecipes() {
    await connectMongoDB();

    const recipes = await Recipe.find();
    return recipes;
}

export async function getRecipeById(id) {
    await connectMongoDB();

    try {
        const recipe = await Recipe.findById(id);
        return recipe;
    } catch (error) {
        return null;
    }
}

export async function getRecipesByCategory(category) {
    await connectMongoDB();

    const recipes = await Recipe.find({ category });
    return recipes;
}

export async function createUser(user) {
    await connectMongoDB();

    return await User.create(user);
}

export async function findUserByCredentials(credentials) {
    await connectMongoDB();

    const user = await User.findOne(credentials);

    if (user) {
        return {
            id: user._id,
            email: user.email,
            favourites: user.favourites,
        };
    }
    return null;
}

export async function addToFavourite(userId, recipeId) {
    await connectMongoDB();

    const user = await User.findById(userId);

    if (user.favourites.includes(recipeId)) {
        return await User.findByIdAndUpdate(userId, { $pull: { favourites: recipeId } }, { new: true });
    }
    return await User.findByIdAndUpdate(userId, { $push: { favourites: recipeId } }, { new: true });
}

export async function getFavourites(userId) {
    await connectMongoDB();

    const user = await User.findById(userId).populate("favourites");
    return user.favourites;
}
