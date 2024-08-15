"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const handleLogin = () => {
    (window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`),
      "_self";
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
