import { Models } from "node-appwrite";

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  DONE = "DONE",
  BACKLOG = "BACKLOG",
}

export type Task = Models.Document & {
  name: string;
  projectId: string;
  assigneeId: string;
  status: TaskStatus;
  dueDate: string;
  position: number;
};
