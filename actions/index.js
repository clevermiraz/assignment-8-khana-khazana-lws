"use server";

import { addToFavourite, createUser, findUserByCredentials } from "@/lib/dbQueries";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);

    if (created) {
        redirect("/login");
    }
}

export async function performLogin(formData) {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");

    const found = await findUserByCredentials(credential);
    return found;
}

export async function addedToFavourite(userId, recipeId) {
    const updatedUser = await addToFavourite(userId, recipeId);

    return {
        id: updatedUser._id,
        email: updatedUser.email,
        favourites: updatedUser.favourites,
    };
}
