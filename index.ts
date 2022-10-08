import { Application } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app = new Application();

app
  .get("/", (c) => {
    return "Hello World";
  })
  .static("/", "./src")
  .start( { port: 80 });
  //.start({ port: 8000 });
