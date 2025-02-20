import { z } from "zod";

const todoSchema = z.object({
  task_name: z.string().min(3),
  assignor: z.string().min(3),
  assignee: z.string().min(3),
  priority: z.string().min(3),
  status: z.string().min(3),
  time: z.date(),
  task_category: z.string().min(3),
});

export default todoSchema;
