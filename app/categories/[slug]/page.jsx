import { getRecipesByCategory } from "@/lib/dbQueries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategoriesPage({ params }) {
    const { slug } = params;

    const decodedSlug = decodeURIComponent(slug);

    const recipes = await getRecipesByCategory(decodedSlug);

    if (!recipes) {
        notFound();
    }

    return (
        <main>
            <section className="container py-8">
                <div>
                    <h3 className="font-semibold text-xl">{decodedSlug}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        {recipes.map((recipe) => (
                            <div className="card" key={recipe?._id}>
                                <Link href={`/recipe-details/${recipe?._id}`}>
                                    <Image
                                        width={300}
                                        height={160}
                                        src={recipe?.thumbnail}
                                        className="rounded-md"
                                        alt="Food"
                                    />
                                    <h4 className="my-2">{recipe?.name}</h4>
                                    <div className="py-2 flex justify-between text-xs text-gray-500">
                                        <span>⭐️ {recipe?.rating}.0</span>
                                        <span>By: {recipe?.author}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}

                        {recipes.length === 0 && (
                            <div className="flex items-center justify-center h-48 w-full">
                                <h3 className="text-lg">No recipes found for this category!</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
