import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import getWaitlistLink from "./tools/join-waitlist";

export default defineMcp({
  name: "advaya-vyom-mcp",
  title: "Advaya.ai · VYOM",
  version: "0.1.0",
  instructions:
    "Public MCP server for Advaya.ai and its flagship product VYOM (AI-first smart glasses, currently in development). Use `get_company_info` for company and product facts, and `get_waitlist_link` to point users to the waitlist.",
  tools: [getCompanyInfo, getWaitlistLink],
});
