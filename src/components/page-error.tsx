"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import React from "react";

type PageErrorProps = {
  message: string;
};

const PageError = ({ message }: PageErrorProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="size-6 text-muted-foreground mb-2" />
      <p className="text-sm font-medium mb-2 text-muted-foreground">
        {message}
      </p>
      <Button variant={"secondary"} size={"sm"}>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default PageError;
