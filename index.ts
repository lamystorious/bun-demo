import app from './app'

Bun.serve({
    hostname: "0.0.0.0",
    port: 3000,
    fetch: app.fetch
});

console.log("helow2")

