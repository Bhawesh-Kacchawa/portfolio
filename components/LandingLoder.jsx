"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GREETINGS = [
    "नमस्ते",
    "Hello",
    "Hola",
    "你好",
    "Bonjour",
    "こんにちは",
    "Hallo",
    "Ciao",
    "안녕하세요",
    "مرحبا",
    "Hello",
];

const INTERVAL_MS = 500;
const FAST_INTERVAL_MS = 250;

// First and last greetings stay slow; the ones in between flash by.
const isFast = (i) => i > 0 && i < GREETINGS.length - 1;

const LandingLoader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= GREETINGS.length) {
            onComplete?.();
            return;
        }
        const timer = setTimeout(
            () => setIndex((i) => i + 1),
            isFast(index) ? FAST_INTERVAL_MS : INTERVAL_MS
        );
        return () => clearTimeout(timer);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence mode="wait">
                {index < GREETINGS.length && (
                    <motion.h1
                        key={GREETINGS[index]}
                        className="text-5xl font-bold md:text-7xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: isFast(index) ? 0.08 : 0.25 }}
                    >
                        {GREETINGS[index]}
                    </motion.h1>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default LandingLoader;