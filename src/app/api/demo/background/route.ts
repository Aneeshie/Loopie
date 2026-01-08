//localhost:3000/api/demo/background
import { inngest } from "@/inngest/client";

export async function POST() {
  try {
    await inngest.send({
      name: "demo/generate",
      data: {}
    })

    return Response.json({ status: "started" });
  } catch (err) {
    console.error("Failed to send Inngest event: ", err);
    return Response.json(
      { status: "error", message: "Error to start background jobs" },
      { status: 500 }
    )
  }


}
