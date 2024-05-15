"use client";

import { addedToFavourite } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Favourite({ recipeId }) {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const [isFavourite, setIsFavourite] = useState(false);

    const handleFavourite = async () => {
        if (!auth) {
            router.push("/login");
            return;
        }

        const updatedUser = await addedToFavourite(auth.id, recipeId);
        setAuth(updatedUser);
        setIsFavourite(!isFavourite);
    };

    return (
        <>
            {!isFavourite ? (
                <div
                    onClick={() => handleFavourite()}
                    className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span>Favourite</span>
                </div>
            ) : (
                <div onClick={() => handleFavourite()} className="flex gap-2  cursor-pointer text-[#eb4a36]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler icon-tabler-heart"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    <span>Unfavourite</span>
                </div>
            )}
        </>
    );
}
