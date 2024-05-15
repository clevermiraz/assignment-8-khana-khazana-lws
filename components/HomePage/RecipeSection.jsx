import Image from "next/image";
import Link from "next/link";

export default function RecipeSection({ allRecipes }) {
    const categories = ["Breakfast & Brunch", "Dessert"];

    return (
        <>
            <section className="container py-8">
                <div className="grid grid-cols-12 py-4">
                    <div className="col-span-12 md:col-span-3">
                        <h3 className="font-bold text-xl">Recipes</h3>
                        <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                            <li className="flex flex-col gap-2">
                                {categories.map((category, index) => (
                                    <Link key={index} href={`/categories/${category}`}>
                                        {category}
                                    </Link>
                                ))}
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                            {/* Single Card */}
                            {allRecipes.map((recipe) => (
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
