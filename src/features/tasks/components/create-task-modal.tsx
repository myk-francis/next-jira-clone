"use client";
import React from "react";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";
import ResposnsiveModal from "@/components/responsive-modal";
import { CreateTaskForm } from "./create-task-form";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResposnsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskForm onCancel={close} />
    </ResposnsiveModal>
  );
};
