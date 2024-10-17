"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DottedSeparator } from "@/components/dotted-separator";
// import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useCreateTask } from "../api/use-create-task";
import { createTaskSchema } from "../schemas";

interface CreateTaskFormProps {
  onCancel?: () => void;
  projectOptions: { id: string; name: string; imageUrl?: string }[];
  memberOptions: { id: string; name: string }[];
}

export const CreateTaskForm = ({
  onCancel,
  projectOptions,
  memberOptions,
}: CreateTaskFormProps) => {
  // const router = useRouter();
  const { mutate, isPending } = useCreateTask();
  const workspaceId = useWorkspaceId();

  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      workspaceId: workspaceId,
    },
  });

  const onSubmit = (values: z.infer<typeof createTaskSchema>) => {
    mutate(
      { json: { ...values, workspaceId } },
      {
        onSuccess: () => {
          form.reset();
          // router.push(`/workspaces/${workspaceId}/projects/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex p-7">
        <CardTitle className="text-xl font-bold">Create a new task</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="flex flex-col space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="text"
                        placeholder="Enter task name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DottedSeparator className="py-7" />
            <div className="flex items-center justify-between">
              <Button
                disabled={isPending}
                onClick={() => onCancel?.()}
                type="button"
                size={"lg"}
                variant={"secondary"}
                className={cn(onCancel ? "block" : "invisible")}
              >
                Cancel
              </Button>
              <Button disabled={isPending} type="submit" size={"lg"}>
                Create Task
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
