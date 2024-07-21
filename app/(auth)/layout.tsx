"use client";

import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/nav-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Sky from "@/assets/images/img5.jpeg";
import { useFirebaseAuth } from "@/auth/context/auth-context";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const firebase = useFirebaseAuth();

  const router = useRouter();

  if (firebase.isLoggedIn) {
    return router.push("/");
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="w-full h-full bg-background rounded-2xl my-1">
        <div className="flex flex-col items-center md:flex-row  w-full h-full">
          <div className=" hidden md:block w-full h-full p-4 ">
            <div className="flex flex-col h-full items-center justify-around">
              <div className="flex flex-col items-center gap-2">
                <h2 className=" text-lg">Largest Image Source</h2>
                <span className=" text-4xl sm:text-5xl text-center">
                  POWERD BY CREATOR AROUND THE WORLD.
                </span>
              </div>
              <div className=" text-center">
                <Button variant="link">Connect with us.</Button>
              </div>
              <div className=" flex items-center">
                <Image
                  src={Sky}
                  alt="AI Generated Image"
                  className="rounded-lg min-w-0 min-h-0 max-w-[500px] max-h-[500px] w-full h-full "
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center p-4">
            {/* <CarouselProvider /> */}
            {children}
          </div>
        </div>
      </main>
      <div className="pb-1">
        <Footer />
      </div>
    </>
  );
};

export default AuthLayout;
