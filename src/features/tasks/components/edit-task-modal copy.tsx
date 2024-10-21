"use client";
import React from "react";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import ResposnsiveModal from "@/components/responsive-modal";
import { CreateTaskFormWrapper } from "./create-task-form-wrapper";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResposnsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResposnsiveModal>
  );
};
