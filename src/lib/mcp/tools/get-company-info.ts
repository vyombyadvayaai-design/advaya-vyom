import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_info",
  title: "Get Advaya.ai company info",
  description:
    "Returns public information about Advaya.ai and its flagship product VYOM, including current stage, vision, and contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "Advaya.ai",
      product: "VYOM",
      tagline: "AI-first smart glasses platform",
      stage: "In development — not yet available for purchase",
      location: "Lucknow, Uttar Pradesh, India",
      website: "https://advaya.ai",
      note: "VYOM is currently under active development. Future capabilities described on the site reflect our vision, not shipping features.",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
