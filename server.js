import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const database = new DatabaseMemory()
const server = fastify()

// fazer um CRUD de videos (proximo youtube)

server.get('/videos', (request, response) => {
    const body = request.body
    
    database.create({
        title: body. title,
        description: body.description,
        duration: body.duration,
    })
    
    return response.status(201).send()
})

server.post('/videos', () => {
    return 'Hello Tiago'
})

server.delete('/videos/:id', () => {
    return 'Hello NodeJs'
})

server.put('/videos/:id', () => {
    return 'Hello NodeJs'
})

server.listen({
    port: 8080,
})