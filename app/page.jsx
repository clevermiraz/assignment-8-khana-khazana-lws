import BannerSection from "@/components/HomePage/BannerSection";
import RecipeSection from "@/components/HomePage/RecipeSection";
import { getAllRecipes } from "@/lib/dbQueries";

export default async function Home() {
    const allRecipes = await getAllRecipes();

    return (
        <main>
            <BannerSection />
            <RecipeSection allRecipes={allRecipes} />
        </main>
    );
}
