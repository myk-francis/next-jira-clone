import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<
  (typeof client.api.tasks)[":taskId"]["$delete"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.tasks)[":taskId"]["$delete"]
>;

export const useDeleteTask = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.tasks[":taskId"]["$delete"]({ param });
      if (!response.ok) {
        throw new Error("Failed to create task");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Task deleted");
      router.refresh();
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
    onError: () => {
      toast.error("Task to create workspace");
    },
  });

  return mutation;
};
