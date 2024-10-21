import React from "react";
import { Task } from "../types";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  return <div>TaskOverview</div>;
};
