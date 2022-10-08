import React from "https://esm.sh/react";
import { renderToString } from "https://esm.sh/react-dom/server";
import { serve } from "./deps.ts";

export default function App() {
  return (
    <>
      <h1>Hola React!</h1>
      <button>Hola!</button>
    </>
  );
}

serve((req) => {
  const app = renderToString(<App />);

  return new Response(app, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});

// si queremos especificar el puerto, podemos hacer
//},  { port: 8001})
