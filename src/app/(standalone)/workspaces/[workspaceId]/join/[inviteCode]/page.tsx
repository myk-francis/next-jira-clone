import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({
  params: { workspaceId },
}: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>WorkspaceIdJoinPage</div>;
};

export default WorkspaceIdJoinPage;
