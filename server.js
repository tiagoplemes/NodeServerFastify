import { fastify } from "fastify";

const server = fastify()

server.get('/', () => {
    return 'Hello World'
})

server.get('/hello', () => {
    return 'Hello Tiago'
})

server.get('/node', () => {
    return 'Hello NodeJs'
})

server.listen({
    port: 8080,
})