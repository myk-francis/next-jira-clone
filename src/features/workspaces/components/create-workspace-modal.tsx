"use client";
import ResposnsiveModal from "@/components/responsive-modal";
import CreateWorkspaceForm from "./create-workspace-form";

export const CreateWorkspaceModal = () => {
  return (
    <ResposnsiveModal open onOpenChange={() => {}}>
      <CreateWorkspaceForm />
    </ResposnsiveModal>
  );
};
