import Image from "next/image";
import Link from "next/link";

export default function RecipeSection() {
    return (
        <>
            <section className="container py-8">
                <div className="grid grid-cols-12 py-4">
                    <div className="col-span-12 md:col-span-3">
                        <h3 className="font-bold text-xl">Recipes</h3>
                        <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                            <li>
                                <Link href="#">Morning Bliss Café</Link>
                            </li>

                            <li>
                                <Link href="#">Sunrise Bites Kitchen</Link>
                            </li>

                            <li>
                                <Link href="#">Brunch Haven Delights</Link>
                            </li>

                            <li>
                                <Link href="#">Rise & Dine Eatery</Link>
                            </li>

                            <li>
                                <Link href="#">Breakfast Oasis Junction</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                            <div className="card">
                                <Link href="/recipe-details">
                                    <Image
                                        width={300}
                                        height={160}
                                        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                                        className="rounded-md"
                                        alt="Food"
                                    />
                                    <h4 className="my-2">
                                        Chef John&apos;s Turkey Sloppy Joes
                                    </h4>
                                    <div className="py-2 flex justify-between text-xs text-gray-500">
                                        <span>⭐️ 5.0</span>
                                        <span>By: John Doe</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
