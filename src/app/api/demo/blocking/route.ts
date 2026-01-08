import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST() {
  try {
    const response = await generateText({
      model: google("gemini-2.5-flash"),
      prompt: "Write a vegetarian lasagna recipe for 4 people.",
    });
    return Response.json({ response });
  } catch (error) {
    console.error("Failed to generate text:", error);
    return Response.json(
      { error: "Failed to generate text" },
      { status: 500 }
    );
  }
}