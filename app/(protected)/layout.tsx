"use client";
import { useFirebaseAuth } from "@/auth/context/auth-context";
import { useRouter } from "next/navigation";

import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/nav-bar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const firebase = useFirebaseAuth();

  const router = useRouter();

  if (!firebase.user) {
    return router.push("/sign-in");
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full h-full bg-background rounded-2xl my-1">
        <div className="flex flex-col items-center md:flex-row  w-full h-full">
          {children}
        </div>
      </main>
      <div className="pb-1">
        <Footer />
      </div>
    </>
  );
};

export default ProtectedLayout;
