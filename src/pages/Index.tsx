import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { StartDialog } from "@/components/StartDialog";

export default function Index() {
  const [startOpen, setStartOpen] = useState(false);
  const openStart = () => setStartOpen(true);

  return (
    <>
      <Hero onStart={openStart} />
      <Features />
      <Pricing onStart={openStart} />
      <FAQ />
      <StartDialog open={startOpen} onOpenChange={setStartOpen} />
    </>
  );
}
