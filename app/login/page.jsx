import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { Suspense } from "react";

export default function LoginPage() {
    return (
        <main>
            <section className="h-screen grid place-items-center">
                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                    <h4 className="font-bold text-2xl">Sign in</h4>

                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginForm />
                    </Suspense>

                    <p className="text-center text-xs text-gray-600">Or</p>

                    <Link href="/register" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                        Create New Account
                    </Link>
                </div>
            </section>
        </main>
    );
}
