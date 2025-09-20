import { useEffect, useState } from "react";

const greetings = [
    "ನಮಸ್ಕಾರ", "नमस्ते", "வணக்கம்",
    "നമസ്കാരം", "హలో", "নমস্কার", "Hello",
    "I'm Sathvik"
];

export default function IntroScreen({ onFinish }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const t = setTimeout(() => setIndex(i => i + 1), 400);
            return () => clearTimeout(t);
        } else {
            const finishTimer = setTimeout(() => onFinish(), 1000);
            return () => clearTimeout(finishTimer);
        }
    }, [index, onFinish]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] text-white">
            <h1 key={greetings[index]} className="text-5xl font-bold animate-fade">
                {greetings[index] === "I'm Sathvik" ? (
                    <>
                        <span className="text-white">I'm </span>
                        <span className="text-green-500">Sathvik</span>
                    </>
                ) : (
                    greetings[index]
                )}
            </h1>
        </div>
    );
}
