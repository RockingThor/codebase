import { GeminiEffect } from "@/components/gemini";
import { SparklesHome } from "@/components/sparkles-home";
import { SpotlightHome } from "@/components/spotlight-home";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full">
            <div className="w-full">
                <div className=" mt-[-5rem] w-full opacity-7">
                    <SparklesHome />
                </div>
                <div className="w-full mt-[-12rem] opacity-2 ">
                    <GeminiEffect />
                </div>
            </div>
        </main>
    );
}
