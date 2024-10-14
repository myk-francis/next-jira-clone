import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceIdSettingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSettingsPage = async ({
  params: { workspaceId },
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>{workspaceId}</div>;
};

export default WorkspaceIdSettingsPage;
