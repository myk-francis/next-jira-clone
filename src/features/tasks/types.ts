// import { Models } from "node-appwrite";

// export type Workspace = Models.Document & {
//   name: string;
//   imageUrl: string;
//   inviteCode: string;
//   userId: string;
// };

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  DONE = "DONE",
  BACKLOG = "BACKLOG",
}
