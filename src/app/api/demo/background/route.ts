//localhost:3000/ap/demo/background
import { inngest } from "@/inngest/client";

export async function POST() {
  await inngest.send({
    name: "demo/generate",
    data: {}
  })

  return Response.json({ status: "started" });
}
