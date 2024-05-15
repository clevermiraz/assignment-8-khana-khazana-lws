"use client";

import { performLogin } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
    const [error, setError] = useState("");

    const { setAuth } = useAuth();
    const router = useRouter();

    const searchParams = useSearchParams();

    async function onSubmit(event) {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const found = await performLogin(formData);

            if (found) {
                setAuth(found);
                const origin = searchParams.get("origin");

                if (origin) {
                    router.push(`/recipe-details/${origin}`);
                    return;
                }

                router.push("/");
            } else {
                setError("Please provide a valid login credential");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <form className="login-form" onSubmit={onSubmit}>
                <div className="my-2 text-red-500">{error}</div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
                    Login
                </button>
            </form>
        </>
    );
}
