const Response = class Response {
    constructor(status, message, posts, comments) {
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
        if (comments) {
            if (comments.length !== undefined) {
                this.comments = comments

            } else {

                this.comments = [comments]
            }
        } else {
            this.comments = null
        }
    }
}

module.exports = { Response }