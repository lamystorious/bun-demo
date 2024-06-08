Bun.serve({
    hostname: "0.0.0.0",
    port: 3000,
    fetch(request) {
        return new Response("Hello to bun!");
    },
});

console.log("helow2")

