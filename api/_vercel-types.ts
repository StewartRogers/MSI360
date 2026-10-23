// Minimal shapes of the Vercel Node.js request/response helpers used by the
// functions in api/, declared locally so they don't depend on the @vercel/node
// package. The leading underscore keeps Vercel from deploying this file as a
// function, and it's imported type-only, so nothing here ships at runtime.
export type VercelRequest = {
  method?: string;
  headers: { origin?: string; host?: string; [name: string]: string | string[] | undefined };
  body?: any;
  socket?: { remoteAddress?: string };
};

export type VercelResponse = {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): VercelResponse;
  json(body: unknown): VercelResponse;
  send(body: unknown): VercelResponse;
};
