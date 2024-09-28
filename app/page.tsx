"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getGoogleOAuthURL } from "@/utils/getGoogleUrl";
import GoogleButton from "react-google-button";
import { useSession } from "next-auth/react";

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile`,
  //         { withCredentials: true } // Ensure cookies are sent with the request
  //       );
  //       console.log(response.data);
  //       setUser(response.data);
  //       console.log(user);
  //     } catch (err) {
  //       setError("Failed to fetch user profile");
  //       console.error(err);
  //     }
  //   };

  //   fetchUserProfile();
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      {user && (
        <>
          <img src={user.image || ""} alt="" className="rounded-full" />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      )}
    </main>
  );
}
