// import { Button } from "@/components/ui/button";
// import { useCurrent } from "@/features/auth/api/use-current";
import { getCurrent } from "@/features/auth/actions";
import { UserButton } from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
import React from "react";

export default async function Home() {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <UserButton />
    </div>
  );
}
