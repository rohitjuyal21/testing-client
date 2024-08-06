"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log(user);
      router.push("/");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile`,
          { withCredentials: true } // Ensure cookies are sent with the request
        );
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user profile");
        console.error(err);
      }
    };

    fetchUserProfile();
  }, []);

  const handleLogin = () => {
    (window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`),
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
