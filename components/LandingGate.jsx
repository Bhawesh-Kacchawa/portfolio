"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingLoader from "./ui/LandingLoder";
import LandingPage from "./LandingPage";

const LandingGate = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {loading && <LandingLoader onComplete={() => setLoading(false)} />}
            </AnimatePresence>
            {!loading && <LandingPage />}
        </>
    );
};

export default LandingGate;
