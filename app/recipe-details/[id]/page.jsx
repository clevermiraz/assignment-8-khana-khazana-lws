import RecipeDetailSection from "@/components/RecipeDetails/RecipeDetailSection";
import { getRecipeById } from "@/lib/dbQueries";
import { notFound } from "next/navigation";

export default async function RecipeDetails({ params }) {
    const { id } = params;

    const recipe = await getRecipeById(id);

    if (!recipe) {
        notFound();
    }

    return (
        <main>
            <RecipeDetailSection recipe={recipe} />
        </main>
    );
}
