"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginSignOutButton() {
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    const logout = () => {
        setAuth(null);
        router.push("/login");
    };

    return (
        <>
            {auth ? (
                <Link href="/login">
                    <button onClick={logout} className="py-2 bg-slate-500 px-6 rounded-md text-white content-center">
                        Logout
                    </button>
                </Link>
            ) : (
                <Link href="/login">
                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">Login</li>
                </Link>
            )}
        </>
    );
}
