"use client";

import { Button } from "@/components/ui/button";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  React.useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data, isLoading, router]);

  return (
    <div>
      Only visible to autorized users
      <Button onClick={() => mutate()}> Logout</Button>
    </div>
  );
}
