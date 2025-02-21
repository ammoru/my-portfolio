// app/api/sentry-example-api/route.js
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    console.log("Sentry Example API Triggered");

    return Response.json({ message: "Sentry API Example Works!" });
  } catch (error) {
    Sentry.captureException(error);
    console.error("API Error:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
