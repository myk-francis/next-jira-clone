import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>Home page.</div>;
}
