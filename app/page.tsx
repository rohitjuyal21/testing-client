"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;
  console.log(user);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      {user && (
        <div className="flex items-center flex-col gap-4">
          <img src={user.image || ""} alt="" className="rounded-full" />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}

      <button
        onClick={async () => {
          await signOut({ redirectTo: "/login" });
        }}
        className="rounded-lg bg-red-500  text-white px-4 py-2 hover:bg-red-600"
      >
        Log out
      </button>
    </main>
  );
}
