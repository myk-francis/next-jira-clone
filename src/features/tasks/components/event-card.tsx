import { Project } from "@/features/projects/types";
import { TaskStatus } from "../types";

interface EventCardProps {
  id: string;
  title: string;
  project: Project;
  status: TaskStatus;
  assignee: any;
}
