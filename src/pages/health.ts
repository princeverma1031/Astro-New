import type { APIRoute } from "astro";

import pkg from "../../package.json";

/**
 * Detailed health check endpoint.
 *
 * GET /health -> {
 *   "status": "ok",
 *   "service": "<package name>",
 *   "version": "<package version>",
 *   "environment": "production" | "development",
 *   "timestamp": "<ISO 8601>"
 * }
 *
 * Complements the minimal `/ping` endpoint with service metadata so
 * monitors can confirm which build is live. This project builds as a
 * static site, so in production the timestamp reflects the time of the
 * last build, not the request time.
 */
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: pkg.name,
      version: pkg.version,
      environment: import.meta.env.PROD ? "production" : "development",
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
