"use client";
import ResposnsiveModal from "@/components/responsive-modal";
import { useCreateProjectModal } from "../hooks/use-create-project-modal";
import { CreateProjectForm } from "./create-project-form";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();
  return (
    <ResposnsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResposnsiveModal>
  );
};
