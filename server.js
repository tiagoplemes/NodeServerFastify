import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

// fazer um CRUD de videos (proximo youtube)

server.get('/', () => {
    return 'Hello World'
})

server.post('/video', () => {
    return 'Hello Tiago'
})

server.delete('/node', () => {
    return 'Hello NodeJs'
})

server.put('/node', () => {
    return 'Hello NodeJs'
})

server.listen({
    port: 8080,
})