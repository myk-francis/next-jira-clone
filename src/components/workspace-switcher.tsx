"use client";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import React from "react";

const WorkspaceSwitcher = () => {
  const { data } = useGetWorkspaces();
  return <div>WorkspaceSwitcher</div>;
};

export default WorkspaceSwitcher;
