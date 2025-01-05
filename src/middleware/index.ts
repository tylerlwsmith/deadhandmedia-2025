import { defineMiddleware, sequence } from "astro:middleware";

const addTrailingSlash = defineMiddleware((context, next) => {
  if (context.url.pathname.at(-1) !== "/") {
    return context.redirect(context.url + "/");
  }
  return next();
});

export const onRequest = sequence(addTrailingSlash);
