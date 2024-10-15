"use client";
import React, { Fragment } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useGetMembers } from "@/features/members/api/use-get-members";

export const MembersList = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetMembers(workspaceId);

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex flex-row items-center gap-x-4 p-7 space-y-0">
        <Button asChild variant="secondary" size={"sm"} onClick={() => {}}>
          <Link href={`/workspaces/${workspaceId}`}>
            <ArrowLeftIcon className="size-4 mr-2" />
            Back
          </Link>
        </Button>
        <CardTitle className="text-xl font-bold">Members List</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">
        {data?.documents.map((member) => (
          <Fragment key={member.$id}>
            <div className="flex items-center gap-2"></div>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};
