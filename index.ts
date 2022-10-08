import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  // Check if the request is for style.css.
  if (pathname.startsWith("/style.css")) {
    // Read the style.css file from the file system.
    const fileCss = await Deno.readFile("./src/style.css");
    // Respond to the request with the style.css file.
    return new Response(fileCss, {
      headers: {
        "content-type": "text/css",
      },
    });
  }

  // Check if the request is for style.css.
  if (pathname.startsWith("/script.js")) {
    // Read the style.css file from the file system.
    const fileJs = await Deno.readFile("./src/script.js");
    // Respond to the request with the style.css file.
    return new Response(fileJs, {
      headers: {
        "content-type": "script/js",
      },
    });
  }

  // Read the style.css file from the file system.
  const fileHtml = await Deno.readFile("./src/index.html");
  // Respond to the request with the style.css file.
  return new Response(fileHtml, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

serve(handleRequest);
