"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import BootSequence from "@/components/devcard/BootSequence";
import Hud from "@/components/devcard/Hud";

const BOOT_KEY = "devcard_booted";

export default function DevCardPage() {
  const [booted, setBooted] = useState(false);
  const [ready, setReady] = useState(false);

  // Decide on the client to avoid a boot-flash for repeat visits in the same session.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(BOOT_KEY) === "1") setBooted(true);
    } catch {}
    setReady(true);
  }, []);

  const complete = () => {
    try {
      sessionStorage.setItem(BOOT_KEY, "1");
    } catch {}
    setBooted(true);
  };

  // Hold on a black frame until we know whether to boot (no spinner, themed).
  if (!ready) return <div style={{ background: "#000", minHeight: "100vh" }} />;

  return (
    <AnimatePresence mode="wait">
      {booted ? <Hud key="hud" /> : <BootSequence key="boot" onComplete={complete} />}
    </AnimatePresence>
  );
}
