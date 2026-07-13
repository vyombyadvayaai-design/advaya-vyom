import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_waitlist_link",
  title: "Get VYOM waitlist link",
  description:
    "Returns the URL where a user can join the VYOM smart glasses waitlist and be notified about launch and early-access updates.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => {
    const url = "https://advaya.ai/#waitlist";
    return {
      content: [
        {
          type: "text",
          text: `Join the VYOM waitlist here: ${url}`,
        },
      ],
      structuredContent: { url },
    };
  },
});
