import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().trim().min(1, "Required").max(256),
  status: z.nativeEnum(TaskStatus, { required_error: "Required" }),
  description: z.string().trim().max(2048).optional(),
  projectId: z.string().trim().min(1, "Required"),
  workspaceId: z.string().trim().min(1, "Required"),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, "Required"),
});
