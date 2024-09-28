"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const handleLogin = async () => {
    await signIn("google");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="text-2xl border-gray-100 border rounded-md px-6 py-2 w-52"
      >
        Login
      </button>
    </div>
  );
};

export default Page;
