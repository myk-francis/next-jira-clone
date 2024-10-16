import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";
import React from "react";

interface ProjectIdSettingsPageProps {
  params: {
    // workspaceId: string;
    projectId: string;
  };
}

const ProjectIdSettingsPage = async ({
  params: { projectId },
}: ProjectIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getProject({ projectId });

  return <div className="w-full lg:max-w-xl">ProjectIdSettingsPage</div>;
};

export default ProjectIdSettingsPage;
