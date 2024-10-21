"use client";
import PageError from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import EditWorkspaceForm from "@/features/workspaces/components/edit-workspace-form";
import React from "react";

const WorkspaceIdSettingsClient = () => {
  const projectId = useProjectId();

  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Workspace not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsClient;
