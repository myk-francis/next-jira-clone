"use client";
import ResposnsiveModal from "@/components/responsive-modal";
import CreateWorkspaceForm from "./create-workspace-form";
import { useCreateWorkspaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();
  return (
    <ResposnsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResposnsiveModal>
  );
};
