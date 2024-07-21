"use client";

import { useFirebaseAuth } from "@/auth/context/auth-context";
import { DragCards } from "@/components/drag-hero";
import Footer from "@/components/footer/footer";
import ShuffleHero from "@/components/hero-section";
import { MouseHero } from "@/components/mouse-hero";
import NavBar from "@/components/navbar/nav-bar";
import { useRouter } from "next/navigation";

export default function Page() {
  const firebase = useFirebaseAuth();

  const router = useRouter();

  if (firebase.isLoggedIn) {
    return router.push("/explore");
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full h-fit bg-background rounded-2xl my-1">
        <MouseHero />
      </main>
      <div className=" pb-1">
        <Footer />
      </div>
    </>
  );
}
