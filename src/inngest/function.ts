import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // Imagine this is a download step
    await step.sleep("wait-a-moment", "30s");

    // Imageine this is a transcript step
    await step.sleep("wait-a-moment", "10");

    // Imagine this is a summary
    await step.sleep("wait-a-moment", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);
