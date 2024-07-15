import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()
    
    create(video) {
        const videoId = randomUUID()

        this.#videos.set(video, videoId)
    }

    update(video, videoId) {

        this.#videos.set(video, videoId)
    }

    delete(videoId) {
        
        this.#videos.delete(videoId)
    }

    list() {
        
        this.#videos.values()
    }
}