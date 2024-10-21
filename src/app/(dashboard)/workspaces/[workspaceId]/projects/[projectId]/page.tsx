import { getCurrent } from "@/features/auth/queries";
import { getProject } from "@/features/projects/queries";
import { redirect } from "next/navigation";
import React from "react";
import ProjectIdClient from "./client";

const ProjectIdPage = async () => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getProject({ projectId });

  if (!initialValues) {
    throw new Error("Project not found");
  }

  return <ProjectIdClient />;
};

export default ProjectIdPage;
