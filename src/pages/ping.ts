import type { APIRoute } from "astro";

/**
 * Lightweight health check endpoint.
 *
 * GET /ping -> { "status": "ok", "timestamp": "<ISO 8601>" }
 *
 * Note: this project builds as a static site, so in production the
 * timestamp reflects the time of the last build, not the request time.
 */
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    },
  );
};
