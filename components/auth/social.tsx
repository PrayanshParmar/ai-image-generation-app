"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { firebaseAuth } from "@/auth/firebase.config";
import { useFirebaseAuth } from "@/auth/context/auth-context";

const Social = () => {
  const firebase = useFirebaseAuth();

  return (
    <div className=" flex items-start w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          firebase.createUserWithGoogle();
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
