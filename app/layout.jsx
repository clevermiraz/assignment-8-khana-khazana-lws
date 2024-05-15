import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import connectMongoDB from "@/lib/mongodb";
import { Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "Khana Khazana",
    description: "The best food in town",
    icons: {
        icon: [
            {
                url: "/lws-logo.svg", // /public path
                href: "/lws-logo.svg", // /public path
            },
        ],
    },
};

export default async function RootLayout({ children }) {
    await connectMongoDB();

    return (
        <html lang="en">
            <body className={poppins.className}>
                <AuthProvider>
                    <Navbar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
