import Recipe from "@/models/Recipes";
import User from "@/models/Users";

export async function getAllUsers() {
    const users = await User.find();
    return users;
}

export async function getAllRecipes() {
    const recipes = await Recipe.find();
    return recipes;
}
