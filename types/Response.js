const Response = class Response {
    constructor(status, message, posts) {
        this.message = message
        this.status = status;
        if (posts) {
            if (posts.length !== undefined) {
                this.posts = posts
            } else {
                this.posts = [posts]
            }
        } else {
            this.posts = null
        }
    
    }
}

module.exports = { Response }