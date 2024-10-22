import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea } from "./ui/scroll-area";

// interface AnalyticsProps {
//   data?: {
//     taskCount: number;
//     taskDifference: number;
//     projectCount?: number;
//     projectDifference?: number;
//     assignedTaskCount: number;
//     asssignedTaskDifference: number;
//     incompleteTaskCount?: number;
//     incompleteTaskDifference?: number;
//     completedTaskCount: number;
//     completedTaskDifference: number;
//     overdueTaskCount: number;
//     overdueTaskDifference: number;
//   };
// }

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1"></div>
      </div>
    </ScrollArea>
  );
};
