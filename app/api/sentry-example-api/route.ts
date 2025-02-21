import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    // console.log("Sentry Example API Triggered");

    return new Response(
      JSON.stringify({ message: "Sentry API Example Works!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    Sentry.captureException(error);
    console.error("API Error:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
