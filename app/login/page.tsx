"use client";
import { signIn } from "next-auth/react";

const Page = () => {
  const handleLogin = async () => {
    await signIn("google");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="rounded-lg px-4 py-2 bg-green-500 hover:bg-green-600"
      >
        Login
      </button>
    </div>
  );
};

export default Page;
